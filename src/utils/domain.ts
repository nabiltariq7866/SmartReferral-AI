import { differenceInCalendarDays, parseISO } from 'date-fns'
import type { Risk, WaitingEntry } from '../types/domain'

export const demoNow = new Date('2026-08-13T14:32:00')
export const daysWaiting = (since: string) => Math.max(0, differenceInCalendarDays(demoNow, parseISO(since)))
export const breachRisk = (entry: WaitingEntry): Risk => {
  const remaining = entry.targetDays - daysWaiting(entry.waitingSince)
  if (remaining < 0) return 'Breached'
  if (remaining <= 3) return 'High'
  if (remaining <= 7) return 'Medium'
  return 'Low'
}
let sequence=0
export const uid = (prefix: string) => `${prefix}-${Date.now().toString(36).toUpperCase()}-${(++sequence).toString(36).toUpperCase()}`
export const formatDate = (value: string) => new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(parseISO(value))
export const formatDateTime = (value: string) => new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(parseISO(value))
