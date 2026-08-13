import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Modal, ReadinessBadge, RiskBadge } from './ui'

describe('accessible shared UI',()=>{
  it('labels operational status beyond colour',()=>{render(<><RiskBadge risk="High"/><ReadinessBadge readiness="Incomplete"/></>);expect(screen.getByText(/High/)).toHaveAttribute('title');expect(screen.getByText(/Incomplete/)).toHaveTextContent('! Incomplete')})
  it('closes modal with Escape',()=>{const close=vi.fn();render(<Modal open onClose={close} title="Example"><button>Action</button></Modal>);expect(screen.getByRole('dialog',{name:'Example'})).toBeInTheDocument();fireEvent.keyDown(document,{key:'Escape'});expect(close).toHaveBeenCalledOnce()})
  it('does not render a closed modal',()=>{render(<Modal open={false} onClose={()=>{}} title="Hidden">Hidden body</Modal>);expect(screen.queryByRole('dialog')).not.toBeInTheDocument()})
})
