import { useState, useEffect } from 'react'
import { generatePassword } from '../utils/chars'

import { CheckCircle } from 'react-bootstrap-icons'

import Button from 'react-bootstrap/Button'

export function Footer({ settings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [isOptionsChecked, setIsOptionsChecked] = useState('primary')
	const [warningMessage, setWarningMessage] = useState('')

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

	useEffect(() => {
		const { includeLetters, includeNumbers, includeSpecialChars } = settings

		if (!(includeLetters || includeNumbers || includeSpecialChars)) {
			setIsOptionsChecked('secondary')
			setWarningMessage('Select at least one option to generate a password')
		} else {
			setIsOptionsChecked('primary')
			setWarningMessage('')
		}
	}, [settings])

	return (
		<div className='footer'>
			<Button
				className='w-100'
				variant={isOptionsChecked}
				disabled={isOptionsChecked === 'secondary' && 'disabled'}
				onClick={handleGeneratePassword}>
				Generate password
			</Button>
			{generatedPassword && (
				<p className='mt-3 m-0'>
					{isCopied ? (
						<span>
							Copied to clipboard <CheckCircle />
						</span>
					) : (
						<span className='generated-password' onClick={copyToClipboard}>
							{generatedPassword}
						</span>
					)}
				</p>
			)}

			{warningMessage && (
				<div className='mt-2'>
					<small className='mt-4 text-warning fade-in'>{warningMessage}</small>
				</div>
			)}
		</div>
	)
}
