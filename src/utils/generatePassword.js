const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const capitalLetters = letters.map(letter => letter.toUpperCase())
const numbers = '0123456789'.split('')
const specialChars = '!@#$%^&*()_+-={}[]|;:<>?/'.split('')

export const generatePassword = passedSettings => {
	const { passwordLength } = passedSettings
	const mergedArray = handleSettings(passedSettings)

	let password = ''
	for (let i = 0; i < passwordLength; i++) {
		const randomArray = mergedArray[Math.floor(Math.random() * mergedArray.length)]
		const randomChar = randomArray[Math.floor(Math.random() * randomArray.length)]
		password += randomChar
	}

	return password
}

const handleSettings = ({ includeLetters, includeCapitalLetters, includeNumbers, includeSpecialChars }) => {
	const mergedArray = []

	includeCapitalLetters && mergedArray.push(capitalLetters)
	includeLetters && mergedArray.push(letters)
	includeNumbers && mergedArray.push(numbers)
	includeSpecialChars && mergedArray.push(specialChars)

	return mergedArray
}
