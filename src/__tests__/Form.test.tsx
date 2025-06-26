import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Form from '../components/Form'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { use } from 'react'

const getElements = () => {
	return {
		titleInput: screen.getByRole('textbox', { name: /title/i }),
		descriptionInput: screen.getByRole('textbox', { name: /description/i }),
		categorySelect: screen.getByRole('combobox', { name: /category/i }),
		submitBtn: screen.getByRole('button', { name: /add task/i }),
	}
}

describe('Form Component', () => {
	let user: UserEvent

	const mockOnSubmit = vi.fn()

	beforeEach(() => {
		mockOnSubmit.mockClear()
		user = userEvent.setup()
		render(<Form onSubmit={mockOnSubmit} />)
	})

	test('renders form with empty fields at start', () => {
		const { titleInput, descriptionInput, categorySelect } = getElements()

		expect(titleInput).toHaveValue('')
		expect(descriptionInput).toHaveValue('')
		expect(categorySelect).toHaveValue('')
	})

	test('submit form with entered values', async () => {
		const { titleInput, descriptionInput, categorySelect, submitBtn } =
			getElements()

		await user.type(titleInput, 'New Task')
		await user.type(descriptionInput, 'Task Description')
		await user.selectOptions(categorySelect, 'urgent')
		await user.click(submitBtn)

		expect(mockOnSubmit).toHaveBeenCalledWith({
			title: 'New Task',
			description: 'Task Description',
			category: 'urgent',
		})
	})

	test('validates required fields', async () => {
		const { submitBtn } = getElements()

		await user.click(submitBtn)

		expect(mockOnSubmit).not.toHaveBeenCalled()
	})

	test('check if form clears after submition', async () => {
		const { titleInput, descriptionInput, categorySelect, submitBtn } =
			getElements()

		await user.type(titleInput, 'New Task')
		await user.type(descriptionInput, 'Task Description')
		await user.selectOptions(categorySelect, 'urgent')
		await user.click(submitBtn)

		expect(titleInput).toHaveValue('')
		expect(descriptionInput).toHaveValue('')
		expect(categorySelect).toHaveValue('')
	})
})
