import { describe, expect, it } from 'vitest'
import { analyzeReferral, detectDuplicateReferral, noShowRisk, recommendSlots } from '.'
import { referrals, patients, slots, waitingList } from '../../data/seed'

describe('deterministic AI simulation',()=>{
  it('extracts cardiology urgency and missing ECG',()=>{const r=analyzeReferral({patientName:'Emma Hughes',requestedService:'Cardiology',text:'Urgent exertional chest discomfort; medication list attached'});expect(r.specialty).toBe('Cardiology');expect(r.urgency).toBe('Urgent');expect(r.missing).toContain('Recent ECG')})
  it('detects a same-patient same-specialty referral',()=>expect(detectDuplicateReferral({patientId:'PT-10492',specialty:'Cardiology'},referrals)?.id).toBe('REF-2026-0842'))
  it('ranks explainable compatible slots only',()=>{const w=waitingList.find(x=>x.specialty==='Cardiology')!;const p=patients.find(x=>x.id===w.patientId)!;const matches=recommendSlots(w,p,slots);expect(matches.length).toBeGreaterThan(0);expect(matches.every(x=>x.slot.specialty==='Cardiology')).toBe(true);expect(matches[0].reasons).toContain('Correct approved specialty')})
  it('flags unconfirmed prior missed attendance as high risk',()=>expect(noShowRisk({previousMissed:1,confirmed:false,waitDays:14,time:'09:00'})).toBe('High'))
})
