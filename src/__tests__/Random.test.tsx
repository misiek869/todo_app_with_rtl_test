import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Random from '../Random'

describe('Random Component', () => {
	it('renders correctly', () => {
		render(<Random />)
		screen.debug()
		const element = screen.getByText('Random')
		expect(element).toBeInTheDocument()
	})
})
