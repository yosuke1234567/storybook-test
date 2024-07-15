import { composeStories } from '@storybook/react'
import { render, type RenderResult, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import { userEvent } from '@storybook/test'
import * as stories from './Dialog.stories'

const { SimpleDialog, BackdropClose } = composeStories(stories)

describe('simple dialog', () => {
  let component: RenderResult
  let trigger: HTMLElement

  beforeEach(async () => {
    component = render(<SimpleDialog />)
    trigger = component.getByRole('button')
    await userEvent.click(trigger)
  })

  test('ダイアログが表示されること', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  test('ダイアログが閉じるボタンでアンマウントされること', async () => {
    const closeButton = screen.getByText('Close')
    await userEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    }, { timeout: 250 })
  })
})