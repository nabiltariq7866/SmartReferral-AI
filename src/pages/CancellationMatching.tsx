import { CalendarDays, Clock, MapPin, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { Badge, Button, Card, Empty, PageHeader } from '../components/ui'
import { rankCancellationPatients } from '../services/ai'
import { useAppStore } from '../stores/useAppStore'
import { formatDate } from '../utils/domain'

export default function CancellationMatching(){
  const s=useAppStore()
  const open=s.cancellations.filter(c=>c.status!=='Filled'&&c.status!=='Closed')
  const respond=(id:string,response:'Accepted'|'Declined'|'No Response')=>{try{s.respondCancellation(id,response);if(response==='Accepted')toast.success('Earlier appointment accepted and assigned');else if(response==='Declined')toast.info('Patient declined; next patient can be offered');else toast.warning('No response recorded; offer remains active until expiry')}catch(e){toast.error((e as Error).message)}}
  return <><PageHeader title="Cancellation Matching" subtitle="Recover released capacity by offering suitable patients an earlier appointment." actions={<Badge tone="cyan">{open.length} active opportunities</Badge>}/>
    {open.length?open.map(op=>{const slot=s.slots.find(x=>x.id===op.slotId);if(!slot)return null;const ranked=rankCancellationPatients(slot,s.waitingList,s.patients);return <Card key={op.id} className="cancellation-card">
      <div className="cancel-slot"><div className="eyebrow">Available cancellation slot</div><h2>{slot.specialty} · {slot.practitioner}</h2><p><CalendarDays size={15}/>{formatDate(slot.date)} <Clock size={15}/>{slot.start} <MapPin size={15}/>{slot.location}</p><small>Originally cancelled {slot.cancellationAt?'just now':'today'} · {slot.clinic}</small></div>
      <div className="eligible"><div className="card-head"><div><h3>Eligible waiting patients</h3><p>Ranked using approved workflow and preference criteria.</p></div><Badge tone="ai"><Sparkles size={13}/> Explainable AI ranking</Badge></div>
        {ranked.length?ranked.slice(0,4).map((x,i)=><div className="eligible-row" key={x.entry.id}><span className="rank">{i+1}</span><span className="avatar">{x.patient.name.split(' ').map(y=>y[0]).join('')}</span><div><strong>{x.patient.name}</strong><small>{x.entry.priority} · {x.reasons.join(' · ')}</small></div><Badge tone={i===0?'ai':'neutral'}>{x.match} · {x.score}</Badge>
          {op.offeredTo===x.patient.id?<div className="response-actions"><Badge tone="warning">{op.response==='No Response'?'No response · offer active':'Offer sent'}</Badge><Button onClick={()=>respond(op.id,'Accepted')}>Accept</Button><Button variant="secondary" onClick={()=>respond(op.id,'Declined')}>Decline</Button><Button variant="ghost" onClick={()=>respond(op.id,'No Response')}>No Response</Button></div>:<Button disabled={op.status==='Offer Sent'} onClick={()=>{try{s.offerCancellation(op.id,x.patient.id);toast.success('Demo slot offer sent')}catch(e){toast.error((e as Error).message)}}}>Offer slot</Button>}
        </div>):<Empty title="No eligible patients" detail="No scheduling-ready patient matches this specialty and released slot."/>}
      </div>
    </Card>}):<Empty title="No cancellation slots available" detail="Cancel a booked appointment in the calendar to create a live cancellation opportunity."/>}
  </>
}
