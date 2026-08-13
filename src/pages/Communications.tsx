import { Mail, MessageSquare, Phone, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Badge, Button, Card, Empty, PageHeader } from '../components/ui'
import { useAppStore } from '../stores/useAppStore'
import { formatDateTime } from '../utils/domain'

export default function Communications() {
  const s = useAppStore()
  const upcoming = s.appointments.filter(a => !['Completed', 'Cancelled', 'No-show'].includes(a.status))
  return <>
    <PageHeader title="Patient Communication" subtitle="Track referral, waiting-list, appointment and reminder communication in one place." />
    <div className="comms-layout">
      <Card title="Patients requiring contact"><div className="contact-list">{upcoming.map(a => {
        const p = s.patients.find(p => p.id === a.patientId)
        return <div key={a.id}><span className="avatar">{p?.name.split(' ').map(x => x[0]).join('')}</span><div><strong>{p?.name}</strong><small>{a.clinic} · {a.date} {a.time}</small></div><Badge tone={a.noShowRisk === 'High' ? 'critical' : a.reminderStatus === 'Sent' ? 'success' : 'warning'}>{a.noShowRisk === 'High' ? 'High no-show risk' : a.reminderStatus}</Badge><Button disabled={a.reminderStatus === 'Sent'} onClick={() => { try { s.sendReminder(a.id, 'SMS'); toast.success('SMS reminder sent') } catch (e) { toast.error((e as Error).message) } }}><Send size={14} /> SMS</Button><Button variant="ghost" onClick={() => { try { s.sendReminder(a.id, 'Email'); toast.success('Email reminder sent') } catch (e) { toast.error((e as Error).message) } }}>Email</Button><Button variant="ghost" onClick={() => { try { s.sendReminder(a.id, 'Phone'); toast.success('Call follow-up recorded') } catch (e) { toast.error((e as Error).message) } }}>Call</Button><Button variant="ghost" onClick={()=>{s.failReminder(a.id);toast.error('Demo reminder failure recorded')}}>Simulate failure</Button>{['Scheduled','Confirmed'].includes(a.status) && <><Button variant="secondary" onClick={() => { try { s.confirmPatient(a.id); toast.success('Patient confirmed; no-show risk reduced') } catch (e) { toast.error((e as Error).message) } }}>Confirmed</Button><select aria-label={`Patient response for ${p?.name}`} defaultValue="" onChange={e=>{if(e.target.value){try{s.recordPatientResponse(a.id,e.target.value as 'Needs Reschedule'|'Cancelled'|'No Response');toast.info(`Response recorded: ${e.target.value}`)}catch(err){toast.error((err as Error).message)}e.target.value=''}}}><option value="">Other response…</option><option>Needs Reschedule</option><option>Cancelled</option><option>No Response</option></select></>}</div>
      })}</div></Card>
      <Card title="Communication timeline">{s.communications.length ? <div className="message-timeline">{s.communications.map(c => <div key={c.id}><span className={`channel ${c.channel.toLowerCase()}`}>{c.channel === 'SMS' ? <MessageSquare /> : c.channel === 'Email' ? <Mail /> : <Phone />}</span><div><strong>{c.type}</strong><p>{c.message}</p><small>{s.patients.find(p => p.id === c.patientId)?.name} · {formatDateTime(c.at)}</small></div><Badge tone={c.status === 'Sent' ? 'success' : c.status === 'Failed' ? 'critical' : 'neutral'}>{c.status}</Badge></div>)}</div> : <Empty title="No communication history yet" detail="Information requests, offers and reminders will appear here." />}</Card>
    </div>
  </>
}
