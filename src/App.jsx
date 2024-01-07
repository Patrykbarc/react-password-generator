import { useState } from 'react'
import { letters, numbers, specialChars } from './utils/chars'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Header } from './components/Header'
import { InputGroup2 } from './components/Input'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Card
			className='bg-dark px-3 py-4 rounded-4 shadow text-white-50'
			style={{ width: '24rem' }}>
			<Card.Body>
				<Header />
				<InputGroup2 />
				<Button className='w-100' variant='primary'>
					Generate password
				</Button>
			</Card.Body>
		</Card>
	)
}

export default App
