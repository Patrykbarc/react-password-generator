import { useState } from 'react'
import { letters, numbers, specialChars } from './utils/chars'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import { LockFill, Clipboard } from 'react-bootstrap-icons'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Card>
			<Card.Body>
				<div className='mb-4'>
					<LockFill className='fs-4 mb-2' />
					<Card.Title>Password generator</Card.Title>
				</div>
				<InputGroup className='mb-3'>
					<InputGroup.Text id='basic-addon1'>
						<Clipboard />
					</InputGroup.Text>
					<Form.Control disabled />
				</InputGroup>
				<Button className='w-100' variant='primary'>
					Generate password
				</Button>
			</Card.Body>
		</Card>
	)
}

export default App
