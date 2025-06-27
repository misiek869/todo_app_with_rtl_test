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
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{items.map(item => {
					return <CardItem key={item.id} {...item} onDelete={onDelete} />
				})}
			</div>
		</section>
	)
}

export default List
