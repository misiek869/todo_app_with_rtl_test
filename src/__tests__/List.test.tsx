import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import List from '../components/List'
import { type Item } from '../utils'

vi.mock('../components/CardItem', () => {
	return {
		default: () => <article>item card</article>,
	}
})

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

		expect(
			screen.getByRole('heading', { level: 2, name: /todos/i })
		).toBeInTheDocument()
	})

	test('renders correct card numbers', () => {
		render(<List items={mockItems} onDelete={mockOnDelete} />)

		const cards = screen.getAllByRole('article')

		expect(cards).toHaveLength(2)
	})

	test('renders empty grid when items not provided', () => {
		render(<List items={[]} onDelete={mockOnDelete} />)

		expect(screen.queryAllByRole('article')).toHaveLength(0)
	})
})
