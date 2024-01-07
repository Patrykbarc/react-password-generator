import { useState } from 'react'

import { generatePassword } from './utils/chars'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Header } from './components/Header'
import { Body } from './components/Body'

function App() {
	const [settings, setSettings] = useState({
		passwordLength: 10,
		includeLetters: true,
		includeNumbers: true,
		includeSpecialChars: true,
	})

	const [generatedPassword, setGeneratedPassword] = useState('')

	function handleGeneratePassword() {
		const newPassword = generatePassword(settings)
		setGeneratedPassword(newPassword)
	}

	return (
		<Card className='card-main bg-dark px-3 py-4 rounded-4 shadow text-white-50'>
			<Card.Body>
				<Header />
				<Body settings={settings} setSettings={setSettings} />
				<Button className='w-100' variant='primary' onClick={handleGeneratePassword}>
					Generate password
				</Button>
				{generatedPassword && <p className='mt-3 m-0'>{generatedPassword}</p>}
			</Card.Body>
		</Card>
	)
}

export default App
