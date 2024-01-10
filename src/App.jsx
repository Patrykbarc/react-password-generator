import { useState } from 'react'

import Card from 'react-bootstrap/Card'

import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'

function App() {
	const [settings, setSettings] = useState({
		passwordLength: 10,
		includeLetters: true,
		includeNumbers: false,
		includeSpecialChars: false,
	})

	return (
		<Card className='card-main bg-dark bg-gradient p-4 rounded-4 text-white-50'>
			<Header />
			<Body settings={settings} setSettings={setSettings} />
			<hr />
			<Footer settings={settings} />
		</Card>
	)
}

export default App
