import { useState } from 'react'
import { generatePassword } from '../utils/chars'

import { CheckCircle } from 'react-bootstrap-icons'

import Button from 'react-bootstrap/Button'

export function Footer({ settings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)

	function handleGeneratePassword() {
		const newPassword = generatePassword(settings)
		setGeneratedPassword(newPassword)
	}

	function copyToClipboard() {
		const text = event.target.textContent
		navigator.clipboard.writeText(text)
		clearTimeout()
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 2500)
	}

	return (
		<div>
			<Button className='w-100' variant='primary' onClick={handleGeneratePassword}>
				Generate password
			</Button>
			{generatedPassword && (
				<p className='generated-password mt-3 m-0'>
					{isCopied ? (
						<span>
							Copied to clipboard <CheckCircle />
						</span>
					) : (
						<span onClick={copyToClipboard}>{generatedPassword}</span>
					)}
				</p>
			)}
		</div>
	)
}
