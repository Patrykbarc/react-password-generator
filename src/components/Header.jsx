import Card from 'react-bootstrap/Card'
import { LockFill } from 'react-bootstrap-icons'

export function Header() {
	return (
		<div className='mb-4'>
			<LockFill className='text-white-50 fs-1 mb-2' />
			<Card.Title className='title fs-2'>Password generator</Card.Title>
		</div>
	)
}
