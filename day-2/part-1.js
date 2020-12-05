const fs = require('fs')

fs.readFile('./input', (err, data) => {
	const input = data.toString().split('\r\n')
	const minMaxRegex = /\d+/g
	const characterRegex = /[a-zA-Z]/
	const validPasswords = []
	
	for (let i = 0; i < input.length; i++) {
		let minMaxTemp
		let characterTemp
		let min
		let max
		let character

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
		let count = 0
		
		for (let j = 0; j < password.length; j++) {
			if (password[j] == character) {
				count++
			}
		}

		if (count >= min && count <= max) {
			validPasswords.push(password)
		}
	}

	console.log(validPasswords.length)
})