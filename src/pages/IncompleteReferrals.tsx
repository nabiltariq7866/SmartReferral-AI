import { useState } from 'react'
import { FileCheck2, Send } from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card, Empty, PageHeader, ReadinessBadge } from '../components/ui'
import { useAppStore } from '../stores/useAppStore'
import { formatDate } from '../utils/domain'

export default function IncompleteReferrals() {
  const s = useAppStore(), nav = useNavigate()
  const [filter, setFilter] = useState('All')
  const items = s.referrals.filter(r => r.readiness !== 'Complete' && (filter === 'All' || r.status === filter))
  return <><PageHeader title="Incomplete Referrals" subtitle="Recover missing information and safely return referrals to clinical review." /><div className="segmented">{[['All','All incomplete'],['AI Processed','Request required'],['Awaiting Information','Awaiting information']].map(([value,label])=><button key={value} className={filter===value?'active':''} onClick={()=>setFilter(value)}>{label}</button>)}</div>{items.length ? items.map(r => {
    const p=s.patients.find(p=>p.id===r.patientId)
    return <Card key={r.id} className="incomplete-row"><div className="incomplete-main"><span className="avatar">{p?.name.split(' ').map(x=>x[0]).join('')}</span><div><h3>{p?.name}</h3><p>{r.id} · {r.aiSpecialty} · Received {formatDate(r.receivedAt)}</p></div></div><ReadinessBadge readiness={r.readiness}/><div className="missing-chips">{r.missingItems.map(i=><Badge tone="warning" key={i}>! {i}</Badge>)}</div><div className="incomplete-actions">{r.status!=='Awaiting Information'?<Button variant="secondary" onClick={()=>{try{s.requestInformation(r.id);toast.success('Information request sent')}catch(e){toast.error((e as Error).message)}}}><Send size={15}/> Request information</Button>:r.missingItems.map(item=><Button key={item} onClick={()=>{s.addInformation(r.id,item);toast.success(`${item} added`)}}><FileCheck2 size={15}/> Add {item}</Button>)}<Button variant="ghost" onClick={()=>nav(`/referrals/${r.id}`)}>Open referral</Button></div></Card>
  }) : <Empty title="No incomplete referrals match this view" detail="Recovered referrals return to the clinical review queue automatically."/>}</>
}
