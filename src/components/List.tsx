import { type Item } from '../utils'
import CardItem from './CardItem'

type ListProps = {
	items: Item[]
	onDelete: (id: string) => void
}

const List = ({ items, onDelete }: ListProps) => {
	return (
		<section className='mt-8'>
			<h2 className='text-xl font-semibold mb-2'>Todos</h2>
		</section>
	)
}

export default List
