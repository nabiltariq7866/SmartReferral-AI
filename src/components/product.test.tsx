import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AISpecialtySuggestion, CapacityPressureBar, ReferralFlowStepper } from './product'

describe('SmartReferral product components',()=>{
 it('renders workflow stage counts accessibly',()=>{render(<ReferralFlowStepper stages={[{label:'Referral Intake',count:12},{label:'Clinical Review',count:4}]} current={0}/>);expect(screen.getByLabelText('Referral workflow')).toHaveTextContent('Referral Intake12')})
 it('labels AI recommendation as requiring validation',()=>{render(<AISpecialtySuggestion specialty="Cardiology" confidence={94} reason="Symptoms match."/>);expect(screen.getByText(/Clinical validation required/)).toBeVisible()})
 it('explains capacity pressure in text',()=>{render(<CapacityPressureBar waiting={1420} slots={840}/>);expect(screen.getByText(/1,420 waiting/)).toBeVisible()})
})
