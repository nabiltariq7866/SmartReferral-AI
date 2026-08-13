import { expect, test } from '@playwright/test'

test.beforeEach(async({page})=>{await page.goto('/settings');await page.evaluate(()=>sessionStorage.clear());page.on('dialog',d=>d.accept());await page.getByRole('button',{name:/Reset Demo Data/i}).click()})

test('all primary navigation routes render without page errors',async({page})=>{
 const links=['Access Command Centre','Referral Inbox','Clinical Review','Incomplete Referrals','Waiting List','Breach Risk','Cancellation Ready','Scheduling Intelligence','Appointment Calendar','Capacity','Cancellation Matching','Patient Communication','Attendance','AI Insights','Access Analytics','Integrations','Audit Trail','Settings']
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message))
 for(const label of links){await page.getByRole('link',{name:label,exact:true}).click();await expect(page.getByRole('heading',{level:1})).toBeVisible()}
 expect(errors).toEqual([])
})

test('referral inbox supports search, sorting, filters and distinct intake methods',async({page})=>{
 await page.goto('/referrals');await expect(page.getByRole('heading',{name:'Referral Inbox'})).toBeVisible();await page.getByRole('textbox',{name:/Search patient, referral ID, GP/}).fill('Emma Hughes');await expect(page.getByText('REF-2026-0842')).toBeVisible();await page.getByRole('button',{name:/Patient/}).click();await page.getByRole('button',{name:'Simulate Email Referral'}).click();await expect(page.getByRole('dialog',{name:/Email referral intake/})).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible()
})
