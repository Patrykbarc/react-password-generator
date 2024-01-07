import { generatePassword } from './utils/chars'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Header } from './components/Header'
import { Body } from './components/Body'

function App() {
	return (
		<Card className='bg-dark px-3 py-4 rounded-4 shadow text-white-50' style={{ width: '24rem' }}>
			<Card.Body>
				<Header />
				<Body />
				<Button className='w-100' variant='primary' onClick={generatePassword}>
					Generate password
				</Button>
			</Card.Body>
		</Card>
	)
}

export default App
