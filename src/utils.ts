import { useState } from 'react'

export type Category = 'urgent' | 'important' | 'normal' | 'low'

export type Item = {
	id: string
	title: string
	description: string
	category: Category
}

export type ItemWithNoId = Omit<Item, 'id'>

export const useFlowManager = () => {
	const [items, setItems] = useState<Item[]>([])

	const handleAddItem = (newItem: ItemWithNoId) => {
		setItems([...items, { ...newItem, id: Date.now().toString() }])
	}

	const handleDeleteItem = (id: string) => {
		const newItems = items.filter(item => item.id !== id)

		setItems(newItems)
	}

	return { items, handleAddItem, handleDeleteItem }
}
