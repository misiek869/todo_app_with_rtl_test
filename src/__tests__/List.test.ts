import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import List from '../components/List'
import { type Item } from '../utils'

describe('List component', () => {
	const mockItems: Item[] = [
		{
			id: '1',
			title: 'Test Item 1',
			category: 'urgent',
			description: 'Tst Description 1',
		},

		{
			id: '2',
			title: 'Test Item 2',
			category: 'normal',
			description: 'Tst Description 2',
		},
		{
			id: '3',
			title: 'Test Item 3',
			category: 'urgent',
			description: 'Tst Description 1',
		},
	]

	const mockOnDelete = vi.fn()

	test('render todo app heading', () => {
		render(<List items={mockItems} onDelete={mockOnDelete} />)

		expect(screen.getByRole('heading', { level: 2, name: /todos/i }))
			.toBeInTheDocument
	})
})
