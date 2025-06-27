import { BsTrash2 } from 'react-icons/bs'

import { type Item } from '../utils'

type CardItemProps = Item & {
	onDelete: (id: string) => void
}

const categoryColors = {
	urgent: 'bg-red-500',
	important: 'bg-yellow-500',
	normal: 'bg-blue-500',
	low: 'bg-green-500',
}

const CardItem = ({
	id,
	title,
	description,
	category,
	onDelete,
}: CardItemProps) => {
	return (
		<article className='w-full rounded-lg borer shadow-md'>
			<div className='flex flex-row items-center justify-between p-6 pb-2'>
				<h3 className='text-lg font-semibold leading-none tracking-tight'>
					{title}
				</h3>
				<button
					className='inline-flex w-9 h-9 items-center justify-center'
					onClick={() => onDelete(id)}
					aria-label={`Delete task : ${id}`}>
					<BsTrash2 className='h-4 w-4' />
				</button>
			</div>
			<div className='p-6 pt-2'>
				<p className='text-sm mb-2'>{description}</p>
				<div
					className={`inline-block ${
						categoryColors[category] || 'bg-gray-500'
					} text-white text-xs font-semibold px-2 py-1 rounded`}>
					{category}
				</div>
			</div>
		</article>
	)
}

export default CardItem
