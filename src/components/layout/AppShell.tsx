import { useMemo, useState, type ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Activity, AlertTriangle, BarChart3, Bell, CalendarDays, ChevronDown, CircleGauge, ClipboardCheck, Clock3, FileWarning, Inbox, Link2, ListChecks, Menu, MessageSquare, Search, Settings, ShieldCheck, Sparkles, UserCheck, X } from 'lucide-react'
import { useAppStore } from '../../stores/useAppStore'
import type { Role } from '../../types/domain'

const sections=[
 {label:'Access overview',items:[['/','Access Command Centre',CircleGauge]]},
 {label:'Referrals',items:[['/referrals','Referral Inbox',Inbox],['/clinical-review','Clinical Review',ClipboardCheck],['/incomplete-referrals','Incomplete Referrals',FileWarning]]},
 {label:'Waiting list',items:[['/waiting-list','Waiting List',ListChecks],['/breach-risk','Breach Risk',AlertTriangle],['/cancellation-ready','Cancellation Ready',Clock3]]},
 {label:'Scheduling',items:[['/scheduling','Scheduling Intelligence',Sparkles],['/calendar','Appointment Calendar',CalendarDays],['/capacity','Capacity',Activity],['/cancellation-matching','Cancellation Matching',Clock3]]},
 {label:'Patient access',items:[['/communications','Patient Communication',MessageSquare],['/attendance','Attendance',UserCheck]]},
 {label:'Intelligence',items:[['/ai-insights','AI Insights',Sparkles],['/analytics','Access Analytics',BarChart3]]},
 {label:'System',items:[['/integrations','Integrations',Link2],['/audit','Audit Trail',ShieldCheck],['/settings','Settings',Settings]]},
] as const

export const AppShell=({children}:{children:ReactNode})=>{
 const[mobile,setMobile]=useState(false),[search,setSearch]=useState(''),[showResults,setShowResults]=useState(false),[showNotes,setShowNotes]=useState(false),[notesMode,setNotesMode]=useState<'Alerts'|'Notifications'>('Notifications')
 const nav=useNavigate();const{role,setRole,patients,referrals,appointments,notifications,markNotificationsRead}=useAppStore();const query=search.toLowerCase()
 const groups=useMemo(()=>search.length>1?[
  {label:'Patients',items:patients.filter(p=>`${p.name} ${p.id}`.toLowerCase().includes(query)).map(p=>({label:p.name,meta:p.id,path:`/referrals/${referrals.find(r=>r.patientId===p.id)?.id??''}`}))},
  {label:'Referrals',items:referrals.filter(r=>`${r.id} ${r.gp} ${r.practice} ${r.aiSpecialty}`.toLowerCase().includes(query)).map(r=>({label:r.id,meta:`${r.aiSpecialty} · ${r.gp}`,path:`/referrals/${r.id}`}))},
  {label:'Appointments',items:appointments.filter(a=>`${a.id} ${a.clinic} ${a.specialty} ${a.practitioner}`.toLowerCase().includes(query)).map(a=>({label:a.id,meta:`${a.clinic} · ${a.date} ${a.time}`,path:'/calendar'}))},
 ].map(g=>({...g,items:g.items.slice(0,4)})).filter(g=>g.items.length):[],[search,query,patients,referrals,appointments])
 const go=(path:string)=>{nav(path);setShowResults(false);setSearch('')}
 const openNotes=(mode:'Alerts'|'Notifications')=>{setNotesMode(mode);setShowNotes(true);markNotificationsRead()}
 const visibleNotes=notesMode==='Alerts'?notifications.filter(n=>n.severity!=='info'):notifications
 return <div className="app-shell">
  <aside className={`sidebar ${mobile?'open':''}`}><div className="brand"><div className="brand-mark">SR</div><div><strong>SMARTREFERRAL</strong><span>AI</span></div><button className="mobile-close" onClick={()=>setMobile(false)} aria-label="Close navigation"><X/></button></div><nav aria-label="Primary navigation">{sections.map(section=><div className="nav-section" key={section.label}><span className="nav-label">{section.label}</span>{section.items.map(([to,label,Icon])=><NavLink key={to} to={to} end={to==='/' } onClick={()=>setMobile(false)}><Icon size={17}/><span>{label}</span></NavLink>)}</div>)}</nav><div className="sidebar-foot"><span className="live-dot"/> Demo systems operational</div></aside>
  <div className="workspace"><header className="topbar">
   <button className="menu-button" onClick={()=>setMobile(true)} aria-label="Open navigation"><Menu/></button><div className="facility"><span>Facility</span><strong>Westbridge University Hospital</strong></div>
   <div className="global-search"><Search size={17}/><input aria-label="Global search" value={search} onFocus={()=>setShowResults(true)} onChange={e=>{setSearch(e.target.value);setShowResults(true)}} onKeyDown={e=>{if(e.key==='Escape')setShowResults(false)}} placeholder="Search patient, referral ID, specialty..."/>{showResults&&search.length>1&&<div className="search-results" role="listbox" aria-label="Global search results">{groups.length?groups.map(group=><div className="search-group" key={group.label}><span>{group.label}</span>{group.items.map(item=><button key={`${group.label}${item.label}`} onClick={()=>go(item.path)}><Search size={14}/><span><strong>{item.label}</strong><small>{item.meta}</small></span></button>)}</div>):<p>No matching patients, referrals or appointments.</p>}</div>}</div>
   <div className="period"><CalendarDays size={16}/><span>13 Aug 2026</span></div>
   <button className="notification-button" aria-label="Alerts" onClick={()=>openNotes('Alerts')}><AlertTriangle size={19}/>{notifications.some(n=>!n.read&&n.severity!=='info')&&<i/>}</button>
   <button className="notification-button" aria-label="Notifications" onClick={()=>openNotes('Notifications')}><Bell size={19}/>{notifications.some(n=>!n.read)&&<i/>}</button>
   {showNotes&&<div className="notifications" role="region" aria-label={`${notesMode} centre`}><h3>{notesMode}</h3>{visibleNotes.length?visibleNotes.slice(0,5).map(n=><div key={n.id} className={`note ${n.severity}`}><strong>{n.title}</strong><span>{n.detail}</span></div>):<p>No active {notesMode.toLowerCase()}.</p>}<button aria-label={`Close ${notesMode}`} onClick={()=>setShowNotes(false)}>Close</button></div>}
   <span className="demo-badge">Demo environment</span><div className="profile"><div>LB</div><span><strong>Laura Bennett</strong><small>{role}</small></span><select aria-label="Simulated role" value={role} onChange={e=>setRole(e.target.value as Role)}>{(['Referral Administrator','Clinician','Scheduler','Access Manager','Consultant','Operations Manager','Administrator'] as Role[]).map(r=><option key={r}>{r}</option>)}</select><ChevronDown size={14}/></div>
  </header><main>{children}</main></div>
 </div>
}
