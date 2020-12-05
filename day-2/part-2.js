const fs = require('fs')

fs.readFile('./input', (err, data) => {
	const input = data.toString().split('\r\n')
	const minMaxRegex = /\d+/g
	const characterRegex = /[a-zA-Z]/
	const validPasswords = []
	
	for (let i = 0; i < input.length; i++) {
		let minMaxTemp = null
		let characterTemp = null
		let min = null
		let max = null
		let character = null

		while ((minMaxTemp = minMaxRegex.exec(input[i])) !== null) {
			if (minMaxTemp.index === minMaxRegex.lastIndex) {
				minMaxRegex.lastIndex++
			}

			minMaxTemp.forEach((match, groupIndex) => {
				if (!min) {
					min = match
				} else if (!max) {
					max = match
				}
			})
		}

		if ((characterTemp = characterRegex.exec(input[i])) !== null) {
			characterTemp.forEach((match, groupIndex) => {
				character = match
			})
		}

		const split = input[i].split(': ')
		const password = split[split.length-1]
		
		if ((password[min-1] === character || password[max-1] === character) && (password[min-1] !== password[max-1])) { // Only one of the positions should match the character, but not both
			validPasswords.push(password)
		}
	}

	console.log(validPasswords.length)
})
