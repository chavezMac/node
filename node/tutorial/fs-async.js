const {readFile, writeFile,} = require('fs');
//const fs = require('fs) same thing as above

//if no encoding provided after path and before error, will print buffer to console
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=> {
	if(err) {
		console.log(err)
		return
	}
	//console.log(result)
	const first = result;
	readFile('./content/second.txt', 'utf-8',(err,result)=> {
		if(err) {
			console.log(err)
			return
		}
		//console.log(result)
		const second = result;
		writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,
		(err,result) => {
			if(err){
				console.log(err)
				return
			}
			console.log('done with this task');
		})
	})
})
console.log('starting next task');