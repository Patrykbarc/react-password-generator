import Card from 'react-bootstrap/Card'
import { LockFill } from 'react-bootstrap-icons'

export function Header() {
	return (
		<div className='header mb-4'>
			<LockFill className='lock-fill-icon text-white-50 mb-2' />
			<Card.Title className='title'>Password generator</Card.Title>
		</div>
	)
}
