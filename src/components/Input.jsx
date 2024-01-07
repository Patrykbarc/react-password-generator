import { useState } from 'react'
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import { ClipboardFill } from 'react-bootstrap-icons'

export function InputGroup2() {
	const [passwordLength, setPasswordLength] = useState(0)

	function handleSetPasswordLength() {
		setPasswordLength(event.target.value)
	}

	return (
		// <InputGroup className='mb-3'>
		<Form className='w-100'>
			<Form.Group className='mb-3'>
				<Form.Label>Password Length</Form.Label>
				<Form.Range
					typeof='number'
					min={1}
					max={50}
					value={passwordLength}
					onChange={handleSetPasswordLength}
				/>
				<p>{passwordLength}</p>
			</Form.Group>
		</Form>
		// </InputGroup>
	)
}
