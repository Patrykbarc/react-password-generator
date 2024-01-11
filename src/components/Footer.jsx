import { useState, useEffect } from 'react'
import { generatePassword } from '../utils/chars'

import { CheckCircle } from 'react-bootstrap-icons'

import Button from 'react-bootstrap/Button'

export function Footer({ settings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [optionsButtonVariant, setOptionsButtonVariant] = useState('primary')
	const [warningMessage, setWarningMessage] = useState('')

	useEffect(() => {
		const { includeLetters, includeCapitalLetters, includeNumbers, includeSpecialChars } = settings

		if (!(includeLetters || includeCapitalLetters || includeNumbers || includeSpecialChars)) {
			setOptionsButtonVariant('secondary')
			setWarningMessage('Select at least one option to generate a password')
		} else {
			setOptionsButtonVariant('primary')
			setWarningMessage('')
		}
	}, [settings])

	function handleGeneratePassword() {
		const newPassword = generatePassword(settings)
		setGeneratedPassword(newPassword)
	}

	function copyToClipboard(event) {
		const text = event.target.textContent
		try {
			navigator.clipboard.writeText(text)
			setIsCopied(true)

			setTimeout(() => {
				setIsCopied(false)
				setWarningMessage('')
			}, 2500)
		} catch (error) {
			setWarningMessage('Failed to copy to clipboard')

			setTimeout(() => {
				setWarningMessage('')
			}, 3500)
		}
	}

	return (
		<div className='footer'>
			<Button
				className='w-100'
				variant={optionsButtonVariant}
				disabled={optionsButtonVariant === 'secondary'}
				onClick={handleGeneratePassword}>
				Generate password
			</Button>
			{generatedPassword && (
				<p className='mt-3 m-0'>
					{isCopied ? (
						<span className='generated-password-feedback'>
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
					<small className='mt-4 text-warning text-opacity-75 fade-in text-justify'>{warningMessage}</small>
				</div>
			)}
		</div>
	)
}
