import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { ClipboardFill } from 'react-bootstrap-icons'

export function InputGroup2() {
	return (
		<InputGroup className='mb-3'>
			<Form.Control
				className='bg-transparent text-white-50 border-end-0'
				disabled
			/>
			<InputGroup.Text className='bg-transparent text-white-50 border-start-0 cursor-pointer'>
				<ClipboardFill className='copy-text-btn' />
			</InputGroup.Text>
		</InputGroup>
	)
}
