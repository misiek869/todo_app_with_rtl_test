import { BsTrash2 } from 'react-icons/bs'

import { type Item } from '../utils'

type CardItemProps = Item & {
	onDelete: (id: string) => void
}

const CardItem = ({
	id,
	title,
	description,
	category,
	onDlete,
}: CardItemProps) => {
	return <div></div>
}

export default CardItem
