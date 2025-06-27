import { createContext, useContext, type ReactNode, useState } from 'react'
import { type Item, type ItemWithNoId } from './utils'

interface TodoContextType {
	items: Item[]
	handleAddItem: (newItem: ItemWithNoId) => void
	handleDeleteItem: (id: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<Item[]>([])

	const handleAddItem = (newItem: ItemWithNoId) => {
		setItems([...items, { ...newItem, id: Date.now().toString() }])
	}

	const handleDeleteItem = (id: string) => {
		setItems(prev => prev.filter(item => item.id !== id))
	}

	return (
		<TodoContext.Provider value={{ items, handleAddItem, handleDeleteItem }}>
			{children}
		</TodoContext.Provider>
	)
}

export function useTodoContext() {
	const context = useContext(TodoContext)
	if (context === undefined) {
		throw new Error('useTodo must be used within a TodoProvider')
	}
	return context
}
