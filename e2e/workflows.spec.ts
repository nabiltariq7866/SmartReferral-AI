import { expect, test, type Page } from '@playwright/test'

test.beforeEach(async({page})=>{await page.goto('/settings');await page.evaluate(()=>sessionStorage.clear());page.on('dialog',d=>d.accept());await page.getByRole('button',{name:/Reset Demo Data/i}).click()})

async function completeEmmaReferral(page:Page){
 await page.goto('/incomplete-referrals')
 let card=page.locator('section.incomplete-row').filter({hasText:'REF-2026-0842'})
 await card.getByRole('button',{name:/Request information/}).click()
 card=page.locator('section.incomplete-row').filter({hasText:'REF-2026-0842'})
 await card.getByRole('button',{name:/Add Recent ECG/}).click()
 await card.getByRole('button',{name:/Add Current medication list/}).click()
}

test('incomplete referral recovers and enters clinical waiting list',async({page})=>{
 await completeEmmaReferral(page);await page.goto('/clinical-review');await page.locator('.review-list>div').filter({hasText:'Emma Hughes'}).getByRole('button',{name:'Review referral'}).click();await page.getByRole('button',{name:/Approve AI suggestion/}).click();await expect(page.getByText('Clinical decision recorded')).toBeVisible();await page.getByRole('button',{name:'Open waiting list'}).click();await expect(page).toHaveURL(/waiting-list/);await expect(page.locator('tr').filter({hasText:'REF-2026-0842'}).getByText('Emma Hughes')).toBeVisible()
})

test('human specialty override persists into waiting list',async({page})=>{
 await completeEmmaReferral(page);await page.goto('/referrals/REF-2026-0842');await page.getByRole('button',{name:/Modify decision/}).click();await page.getByLabel('Final specialty').selectOption('Respiratory');await page.getByRole('button',{name:/Modify & approve/}).click();await expect(page.getByText(/Final: Respiratory/)).toBeVisible();await page.goto('/waiting-list');await expect(page.locator('tr').filter({hasText:'Emma Hughes'}).getByText('Respiratory')).toBeVisible()
})

test('appointment cancellation creates a match opportunity',async({page})=>{
 await page.goto('/calendar');await page.getByRole('button',{name:/Elena Petrova/}).click();await page.getByRole('button',{name:'Cancel appointment'}).click();await page.goto('/cancellation-matching');await expect(page.getByText('Available cancellation slot').first()).toBeVisible()
})

test('appointment cancellation is matched, offered and accepted',async({page})=>{
 await page.goto('/calendar')
 await page.getByRole('button',{name:/Elena Petrova/}).click()
 await page.getByRole('button',{name:'Cancel appointment'}).click()
 await page.goto('/cancellation-matching')
 const card=page.locator('.cancellation-card').first()
 const offeredPatient=(await card.locator('.eligible-row').first().locator('strong').first().textContent())!
 await card.getByRole('button',{name:'Offer slot'}).first().click()
 await expect(card.getByText('Offer sent')).toBeVisible()
 await card.getByRole('button',{name:'Accept'}).click()
 await expect(page.getByText('No cancellation slots available')).toBeVisible()
 await page.goto('/calendar')
 await expect(page.locator('.calendar-event').filter({hasText:offeredPatient})).toBeVisible()
})

test('reminder, confirmation and attendance complete one connected appointment',async({page})=>{
 await page.goto('/communications');await page.locator('.contact-list>div').filter({hasText:'Elena Petrova'}).getByRole('button',{name:'SMS'}).click();await page.locator('.contact-list>div').filter({hasText:'Elena Petrova'}).getByRole('button',{name:'Confirmed'}).click();await page.goto('/attendance');let row=page.locator('.attendance-list>div').filter({hasText:'Elena Petrova'});await row.getByRole('button',{name:'Mark arrived'}).click();row=page.locator('.attendance-list>div').filter({hasText:'Elena Petrova'});await row.getByRole('button',{name:'Start consultation'}).click();row=page.locator('.attendance-list>div').filter({hasText:'Elena Petrova'});await row.getByRole('button',{name:'Complete'}).click();await expect(row.getByText('Completed')).toBeVisible()
})

test('Emma referral continues through scheduling, reminder and completed attendance',async({page})=>{
 await completeEmmaReferral(page);await page.goto('/referrals/REF-2026-0842');await page.getByRole('button',{name:/Approve AI suggestion/}).click();await page.goto('/waiting-list');const row=page.locator('tr').filter({hasText:'REF-2026-0842'});await row.getByRole('button',{name:'Find slot'}).click();await page.getByRole('button',{name:'Assign appointment'}).first().click();await page.goto('/communications');let contact=page.locator('.contact-list>div').filter({hasText:'Emma Hughes'});await contact.getByRole('button',{name:'SMS'}).click();contact=page.locator('.contact-list>div').filter({hasText:'Emma Hughes'});await contact.getByRole('button',{name:'Confirmed'}).click();await page.goto('/attendance');let attendance=page.locator('.attendance-list>div').filter({hasText:'Emma Hughes'});await attendance.getByRole('button',{name:'Mark arrived'}).click();attendance=page.locator('.attendance-list>div').filter({hasText:'Emma Hughes'});await attendance.getByRole('button',{name:'Start consultation'}).click();attendance=page.locator('.attendance-list>div').filter({hasText:'Emma Hughes'});await attendance.getByRole('button',{name:'Complete'}).click();await expect(attendance.getByText('Completed')).toBeVisible()
})
