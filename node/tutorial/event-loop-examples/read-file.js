const {readFile} = require('fs')

console.log('started first task')

//Check file path
readFile('./contents/first.txt', 'utf-8', (err,result)=> {
	if(err) {
		console.log(err)
		return
	}
	console.log(result)
	console.log('completed first task')
})
console.log('starting next task')