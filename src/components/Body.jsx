import Form from 'react-bootstrap/Form'

export function Body({ settings, setSettings }) {
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
		<Form>
			<Form.Group className='mb-3'>
				<Form.Label>
					Password Length: <b>{passwordLength}</b>
				</Form.Label>
				<Form.Range type='number' min={1} max={50} value={passwordLength} onChange={handleSetPasswordLength} />
			</Form.Group>
			<div className='d-flex gap-2'>
				{['Letters', 'Numbers', 'SpecialChars'].map(option => (
					<label
						key={option}
						className='border border-secondary px-2 py-1 rounded flex-grow-1'
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
		</Form>
	)
}
