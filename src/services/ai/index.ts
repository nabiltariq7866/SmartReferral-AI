import type { Patient, Priority, Referral, Slot, Specialty, WaitingEntry } from '../../types/domain'
import { breachRisk, daysWaiting } from '../../utils/domain'

export interface ReferralDraft { text: string; patientName: string; requestedService?: Specialty }
export const analyzeReferral = (draft: ReferralDraft) => {
  const text=draft.text.toLowerCase()
  const specialty:Specialty = /chest|cardiac|palpitation/.test(text)?'Cardiology':/migraine|seizure|neurol/.test(text)?'Neurology':/knee|hip|joint/.test(text)?'Orthopaedics':/cough|spirometry|breath/.test(text)?'Respiratory':'Dermatology'
  const urgency:Priority = /severe|urgent|exertional|rapid/.test(text)?'Urgent':/increasing|persistent/.test(text)?'Priority':'Routine'
  const missing:string[]=[]
  if(specialty==='Cardiology'&&!/ecg/.test(text))missing.push('Recent ECG')
  if(specialty==='Orthopaedics'&&!/x-ray|mri|imaging/.test(text))missing.push('Diagnostic imaging')
  if(!/medication|taking|prescribed/.test(text))missing.push('Current medication list')
  return { specialty, urgency, missing, confidence: specialty===draft.requestedService?95:87, route:specialty==='Cardiology'&&urgency==='Urgent'?'Rapid Access Chest Pain Clinic':`General ${specialty}`, reason:`Referral language and documented symptoms align with the ${specialty} pathway.`, readiness:missing.length?'Incomplete':'Complete' as const }
}
export const detectDuplicateReferral=(candidate:{patientId:string;specialty:Specialty},referrals:Referral[])=>referrals.find(r=>r.patientId===candidate.patientId&&(r.finalSpecialty??r.aiSpecialty)===candidate.specialty)
export interface SlotMatch { slot:Slot; score:number; quality:'Excellent'|'High'|'Good'; reasons:string[]; tradeoff?:string }
export const recommendSlots=(entry:WaitingEntry, patient:Patient, slots:Slot[]):SlotMatch[]=>slots.filter(s=>s.status==='Available'&&s.booked<s.capacity&&s.specialty===entry.specialty).map(s=>{let score=70;const reasons=['Correct approved specialty','Referral complete'];if(patient.preferences.some(p=>p.toLowerCase().includes(s.start<'12:00'?'morning':'afternoon'))){score+=12;reasons.push('Matches patient time preference')}if(patient.preferences.includes(s.location)){score+=8;reasons.push('Matches preferred location')}if(breachRisk(entry)==='High'||breachRisk(entry)==='Breached'){score+=8;reasons.push('Protects the approved wait target')}reasons.push('No scheduling conflict');return{slot:s,score,quality:score>=92?'Excellent':score>=82?'High':'Good',reasons,tradeoff:score<82?'Preference mismatch or later date':undefined} as SlotMatch}).sort((a,b)=>b.score-a.score||a.slot.date.localeCompare(b.slot.date)).slice(0,3)
export const rankCancellationPatients=(slot:Slot, waiting:WaitingEntry[], patients:Patient[])=>waiting.filter(w=>w.status==='Active'&&w.readiness==='Complete'&&w.specialty===slot.specialty&&w.cancellationReady).map(w=>{const patient=patients.find(p=>p.id===w.patientId)!;let score=50+Math.min(daysWaiting(w.waitingSince),30)+(w.priority==='Urgent'?20:w.priority==='Priority'?10:0);if(patient.preferences.some(x=>x.includes('Morning')&&slot.start<'12:00'))score+=10;return{entry:w,patient,score,match:score>=85?'Excellent':score>=70?'Good':'Suitable',reasons:[`${w.priority} clinically approved priority`,`${daysWaiting(w.waitingSince)} days waiting`,'Referral complete',patient.preferences[0]]}}).sort((a,b)=>b.score-a.score)
export const noShowRisk=(input:{previousMissed:number;confirmed:boolean;waitDays:number;time:string}):'Low'|'Medium'|'High'=>input.previousMissed>0&&!input.confirmed?'High':!input.confirmed||input.waitDays>60?'Medium':'Low'
export const capacityPressure=(waiting:number,slots:number):'Low'|'Medium'|'High'=>slots===0||waiting/slots>1.5?'High':waiting/slots>1?'Medium':'Low'
