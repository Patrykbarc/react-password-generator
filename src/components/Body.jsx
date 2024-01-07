import { useState } from 'react'
import Form from 'react-bootstrap/Form'

export function Body() {
	const [settings, setSettings] = useState({
		passwordLength: 0,
		includeLetters: true,
		includeNumbers: true,
		includeSpecialChars: true,
	})

	const { passwordLength } = settings

	function handleSetPasswordLength(event) {
		setSettings(prevSettings => ({
			...prevSettings,
			passwordLength: parseInt(event.target.value),
		}))
	}

	function handleSetOptions(optionName) {
		setSettings(prevSettings => ({
			...prevSettings,
			[optionName]: !prevSettings[optionName],
		}))
	}

	return (
		<Form className='w-100'>
			<Form.Group className='mb-3'>
				<Form.Label>
					Password Length: <b>{passwordLength}</b>
				</Form.Label>
				<Form.Range
					type='number'
					min={1}
					max={50}
					value={passwordLength}
					onChange={handleSetPasswordLength}
				/>
			</Form.Group>
			<div className='d-flex justify-content-between'>
				{['Letters', 'Numbers', 'SpecialChars'].map(option => (
					<label
						key={option}
						className='border border-secondary px-2 py-1 rounded'
						htmlFor={option.toLowerCase()}>
						<input
							className='me-1'
							type='checkbox'
							id={option.toLowerCase()}
							checked={settings[`include${option}`]}
							onChange={() => handleSetOptions(`include${option}`)}
						/>
						{option}
					</label>
				))}
			</div>

			<hr />
		</Form>
	)
}
