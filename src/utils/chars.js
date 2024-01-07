const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const numbers = '0123456789'.split('')
const specialChars = '!@#$%^&*()_+-={}[]|;:<>?/'.split('')

export const generatePassword = passedSettings => {
	const { passwordLength, includeLetters, includeNumbers, includeSpecialChars } = passedSettings
	const mergedArray = handleSettings(includeLetters, includeNumbers, includeSpecialChars)

	let password = ''
	for (let i = 0; i < passwordLength; i++) {
		const randomArray = mergedArray[Math.floor(Math.random() * mergedArray.length)]
		const randomChar = randomArray[Math.floor(Math.random() * randomArray.length)]
		password += randomChar
	}

	return password
}

const handleSettings = (includeLetters, includeNumbers, includeSpecialChars) => {
	const mergedArray = []

	includeLetters && mergedArray.push(letters)
	includeNumbers && mergedArray.push(numbers)
	includeSpecialChars && mergedArray.push(specialChars)

	return mergedArray
}
