export type Role = 'Referral Administrator' | 'Clinician' | 'Scheduler' | 'Access Manager' | 'Consultant' | 'Operations Manager' | 'Administrator'
export type Specialty = 'Cardiology' | 'Dermatology' | 'Neurology' | 'Orthopaedics' | 'Gastroenterology' | 'Respiratory'
export type Priority = 'Routine' | 'Priority' | 'Urgent' | 'Very Urgent'
export type Risk = 'Low' | 'Medium' | 'High' | 'Breached'
export type Readiness = 'Complete' | 'Incomplete' | 'Needs Clarification'
export type ReferralStatus = 'New' | 'AI Processed' | 'Awaiting Information' | 'Needs Review' | 'Approved' | 'Rejected' | 'Duplicate'
export type AppointmentStatus = 'Scheduled' | 'Confirmed' | 'Arrived' | 'In Progress' | 'Completed' | 'No-show' | 'Cancelled'

export interface Patient { id: string; name: string; dob: string; phone: string; email: string; preferences: string[]; location: string }
export interface TimelineEvent { id: string; at: string; label: string; actor: string; detail?: string }
export interface Referral {
  id: string; patientId: string; source: string; gp: string; practice: string; receivedAt: string; requestedService: Specialty;
  reason: string; symptoms: string[]; history: string; investigations: string[]; medications: string[];
  aiSpecialty: Specialty; aiUrgency: Priority; aiRoute: string; aiConfidence: number; aiReason: string;
  finalSpecialty?: Specialty; finalUrgency?: Priority; finalRoute?: string; clinicianNotes?: string;
  missingItems: string[]; receivedItems: string[]; readiness: Readiness; status: ReferralStatus;
  duplicateOf?: string; summary: string; owner: string; timeline: TimelineEvent[];
}
export interface WaitingEntry {
  id: string; referralId: string; patientId: string; specialty: Specialty; priority: Priority; waitingSince: string; targetDays: number;
  readiness: Readiness; cancellationReady: boolean; noShowRisk: Exclude<Risk, 'Breached'>; status: 'Active' | 'On Hold' | 'Scheduled'; suggestedSlotId?: string;
}
export interface Slot { id: string; practitioner: string; specialty: Specialty; clinic: string; date: string; start: string; duration: number; location: string; capacity: number; booked: number; status: 'Available' | 'Booked' | 'Reserved' | 'Cancelled'; type: string; cancellationAt?: string }
export interface Appointment { id: string; patientId: string; referralId: string; slotId: string; specialty: Specialty; practitioner: string; clinic: string; date: string; time: string; location: string; status: AppointmentStatus; noShowRisk: Exclude<Risk, 'Breached'>; reminderStatus: 'Not sent' | 'Sent' | 'Failed'; lastReminder?: string }
export interface Communication { id: string; patientId: string; referralId?: string; appointmentId?: string; at: string; channel: 'SMS' | 'Email' | 'Portal' | 'Phone'; type: string; status: 'Sending' | 'Sent' | 'Failed' | 'Received'; message: string }
export interface CancellationOpportunity { id: string; slotId: string; appointmentId: string; createdAt: string; expiresAt?: string; status: 'Open' | 'Offer Sent' | 'Filled' | 'Closed'; offeredTo?: string; response?: 'Accepted' | 'Declined' | 'No Response' }
export interface AuditEvent { id: string; at: string; user: string; patientId?: string; referralId?: string; action: string; previous?: string; next?: string }
export interface Notification { id: string; title: string; detail: string; at: string; read: boolean; severity: 'info' | 'warning' | 'critical' }
