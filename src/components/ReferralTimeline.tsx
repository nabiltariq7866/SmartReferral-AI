import { Check } from 'lucide-react'
import type { TimelineEvent } from '../types/domain'
import { formatDateTime } from '../utils/domain'

export const ReferralTimeline=({events}:{events:TimelineEvent[]})=><div className="timeline" aria-label="Referral progress">
 {events.map((event,index)=><article className="timeline-item" key={event.id}>
  <div className="timeline-marker"><span className="timeline-dot"><Check size={13}/></span>{index<events.length-1&&<i/>}</div>
  <div className="timeline-content"><span className="timeline-step">Step {index+1}</span><strong>{event.label}</strong>{event.detail&&<p>{event.detail}</p>}<small>{formatDateTime(event.at)} · {event.actor}</small></div>
 </article>)}
</div>
