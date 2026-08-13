import { CheckCircle2, Clock3, UserCheck, UserX } from 'lucide-react'
import { toast } from 'sonner'
import { Badge, Button, Card, Empty, PageHeader } from '../components/ui'
import { useAppStore } from '../stores/useAppStore'
import type { AppointmentStatus } from '../types/domain'

const statuses: AppointmentStatus[] = ['Scheduled','Confirmed','Arrived','In Progress','Completed','No-show','Cancelled']

export default function Attendance(){
  const s=useAppStore()
  const act=(id:string,status:AppointmentStatus)=>{try{s.updateAttendance(id,status);toast.success(`Attendance updated to ${status}`)}catch(e){toast.error((e as Error).message)}}
  return <>
    <PageHeader title="Attendance" subtitle="Manage patient arrival, clinic progress, completion, no-show and cancellation outcomes."/>
    <div className="attendance-summary">{statuses.map(st=><Card key={st}><span>{st}</span><strong>{s.appointments.filter(a=>a.status===st).length}</strong></Card>)}</div>
    <Card>{s.appointments.length?<div className="attendance-list">{s.appointments.map(a=>{const p=s.patients.find(p=>p.id===a.patientId);return <div key={a.id}>
      <div className="appt-time"><strong>{a.time}</strong><small>{a.date}</small></div><span className="avatar">{p?.name.split(' ').map(x=>x[0]).join('')}</span>
      <div className="appt-patient"><strong>{p?.name}</strong><small>{a.clinic} · {a.practitioner} · {a.location}</small></div>
      <Badge tone={a.status==='Completed'?'success':a.status==='No-show'||a.status==='Cancelled'?'critical':a.status==='Arrived'?'cyan':'indigo'}>{a.status}</Badge>
      <div className="row-actions">{['Scheduled','Confirmed'].includes(a.status)&&<Button onClick={()=>act(a.id,'Arrived')}><UserCheck size={15}/> Mark arrived</Button>}{a.status==='Arrived'&&<Button onClick={()=>act(a.id,'In Progress')}><Clock3 size={15}/> Start consultation</Button>}{a.status==='In Progress'&&<Button onClick={()=>act(a.id,'Completed')}><CheckCircle2 size={15}/> Complete</Button>}{['Scheduled','Confirmed'].includes(a.status)&&<Button variant="danger" onClick={()=>act(a.id,'No-show')}><UserX size={15}/> No-show</Button>}{a.status==='No-show'&&<Button variant="secondary" onClick={()=>{s.returnToWaitingList(a.id);toast.success('Patient returned to waiting list')}}>Return to waiting list</Button>}</div>
    </div>})}</div>:<Empty title="No appointments to manage" detail="Assigned appointments will appear in the attendance workflow."/>}</Card>
  </>
}
