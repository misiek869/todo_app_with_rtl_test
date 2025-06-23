import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Form from '../components/Form'
import userEvent, { UserEvent } from '@testing-library/user-event'

const getElements = () => {
	return {
		titleInput: screen.getByRole('textbox', { name: /title/i }),
		descriptionInput: screen.getByRole('textbox', { name: /description/i }),
		categorySelect: screen.getByRole('combobox', { name: /category/i }),
		submitBtn: screen.getByRole('button', { name: /add task/i }),
	}
}

describe('Form Component', () => {})
