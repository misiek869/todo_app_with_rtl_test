import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWithContext from './AppWithContext.tsx'
import { TodoProvider } from './TodoContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TodoProvider>
			<AppWithContext />
		</TodoProvider>
		{/* <App /> */}
	</StrictMode>
)
