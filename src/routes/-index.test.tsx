import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { App } from './index'

describe('people route', () => {
  it('renders an empty people list', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'People (0)' })).toBeInTheDocument()
    expect(screen.getByText('No people yet.')).toBeInTheDocument()
  })

  it('adds a trimmed person name to the list', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByLabelText('Name'), '  Katherine Johnson  ')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(screen.getByRole('heading', { name: 'People (1)' })).toBeInTheDocument()
    expect(screen.getByText('Katherine Johnson')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveValue('')
  })

  it('disables the add button while the name is empty', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Add' })).toBeDisabled()
  })
})
