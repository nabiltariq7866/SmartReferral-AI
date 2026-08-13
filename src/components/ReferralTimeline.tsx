import { Check } from 'lucide-react'
import type { TimelineEvent } from '../types/domain'
import { formatDateTime } from '../utils/domain'
export const ReferralTimeline=({events}:{events:TimelineEvent[]})=><div className="timeline">{events.map(e=><div className="timeline-item" key={e.id}><span className="timeline-dot"><Check size={12}/></span><div><strong>{e.label}</strong><p>{e.detail}</p><small>{formatDateTime(e.at)} · {e.actor}</small></div></div>)}</div>
