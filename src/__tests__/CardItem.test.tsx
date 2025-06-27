import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CardItem from '../components/CardItem'
import userEvent from '@testing-library/user-event'
import { type Item } from '../utils'

type MockProps = Item & {
	onDelete: (id: string) => void
}

describe('CardItem component', () => {
	const mockProps: MockProps = {
		id: '1',
		title: ' test title 1',
		description: 'test description 1',
		category: 'urgent',
		onDelete: vi.fn(),
	}

	test('renders card with correct content', () => {
		render(<CardItem {...mockProps} />)
		expect(screen.getByRole('heading', { name: /test title 1/i }))
		expect(screen.getByText('test description 1')).toBeInTheDocument()
		expect(screen.getByText('urgent')).toBeInTheDocument()
	})

	test('calls onDelete when click delete btn', async () => {
		const user = userEvent.setup()
		render(<CardItem {...mockProps} />)

		const deleteButton = screen.getByRole('button', {
			name: 'Delete task : 1',
		})

		await user.click(deleteButton)
		expect(mockProps.onDelete).toHaveBeenNthCalledWith(1, '1')
	})
})
