import { type Item } from '../utils'
import CardItem from './CardItem'

type ListProps = {
	items: Item[]
	onDelete: (id: string) => void
}

const List = ({ items, onDelete }: ListProps) => {
	return <div></div>
}

export default List
