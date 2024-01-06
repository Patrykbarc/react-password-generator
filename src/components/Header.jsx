import Card from 'react-bootstrap/Card'
import { LockFill } from 'react-bootstrap-icons'

export function Header() {
	return (
		<div className='mb-4'>
			<LockFill className='text-white-50 fs-4 mb-2' />
			<Card.Title className='text-white-50'>Password generator</Card.Title>
		</div>
	)
}
