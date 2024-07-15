import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import * as previewAnnotations from './.storybook/preview'

setProjectAnnotations([
  previewAnnotations,
])

afterEach(() => {
  cleanup()
})