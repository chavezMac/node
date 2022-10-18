const express = require('express');
const app = express();
//const app = require('express')();
//app.get
app.get('/', (req,res)=> {
	console.log('user hit the resource')
	res.status(200).send('Home Page')
})
app.get('/about',(req,res)=> {
	res.status(200).send('About Page')
})

//app.post
//app.put
//app.delete
//app.all
app.all('*', (req,res)=> {
	res.status(404).send('<h1>resource not found</h1>')
})
//app.use
//app.listen
app.listen(8000, ()=> {
	console.log("server listening on http://localhost:8000")
})