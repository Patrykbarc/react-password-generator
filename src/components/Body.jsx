import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'

export function Body({ settings, setSettings }) {
	const { passwordLength } = settings

	const [selectedOptions, setSelectedOptions] = useState(settings)
	useEffect(() => {
		setSelectedOptions(settings)
	}, [settings])

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

	const styleSelectedOption = optionName => (selectedOptions[optionName] ? 'bg-secondary' : '')

	const formatOptionName = option =>
		option
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.toLowerCase()
			.replace(/^\w/, c => c.toUpperCase())

	return (
		<div className='body'>
			<Form>
				<Form.Group className='mb-3'>
					<Form.Label>
						Password Length: <b>{passwordLength}</b>
					</Form.Label>
					<Form.Range type='number' min={1} max={50} value={passwordLength} onChange={handleSetPasswordLength} />
				</Form.Group>
				<div className='d-flex gap-2 flex-wrap'>
					{['Letters', 'CapitalLetters', 'Numbers', 'SpecialChars'].map((option, index) => (
						<label
							key={option}
							className={`option border border-secondary px-2 py-1 rounded flex-grow-1 ${styleSelectedOption(
								`include${option}`
							)}`}
							htmlFor={option.toLowerCase()}>
							<input
								className='d-none me-1'
								type='checkbox'
								value={index}
								id={option.toLowerCase()}
								checked={settings[`include${option}`]}
								onChange={() => handleSetOptions(`include${option}`)}
							/>
							{formatOptionName(option)}
						</label>
					))}
				</div>
			</Form>
		</div>
	)
}
