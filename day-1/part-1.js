const fs = require('fs')

fs.readFile('./input', (err, data) => {
	if (err) throw err

	input = data.toString().split('\r\n')

	let answer
	
	for (let i = 0; i < input.length; i++) {
		const current = parseInt(input[i])

		for (let j = 0; j < input.length; j++) {
			if (current + parseInt(input[j]) === 2020) {
				answer = current * input[j]
			}
		}
	}

	console.log(answer)
})
