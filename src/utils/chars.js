export const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const specialChars = [
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'+',
	'-',
	'=',
	'{',
	'}',
	'[',
	']',
	'|',
	';',
	':',
	'<',
	'>',
	'?',
	'/',
]

// const chars = [...letters, ...numbers, ...specialChars]

export const generatePassword = () => {
	let password = ''

	for (let i = 0; i < letters.length; i++) {
		const randomIndex = Math.floor(Math.random() * letters.length)
		password += letters[randomIndex]
	}
	// return password
	console.log(password)
}
