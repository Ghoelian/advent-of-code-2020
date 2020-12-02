const fs = require('fs')

fs.readFile('./input', (err, data) => {
	if (err) throw err

	input = data.toString().split('\r\n')

	let answer
	
	for (let i = 0; i < input.length; i++) {
		const current_one = parseInt(input[i])

		for (let j = 0; j < input.length; j++) {
			const current_two = parseInt(input[j])

			for (let k = 0; k < input.length; k++) {
				if (current_one + current_two + parseInt(input[k]) === 2020) {
					answer = current_one * current_two * input[k]
				}
			}
		}
	}

	console.log(answer)
})
