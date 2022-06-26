const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    //code
    const data = {
        success: true,
        message: "Backend is running well and started from nodemon ahh"
    }
    return res.send(data)
})

app.post('/login', (req, res)=>{
        // const email = req.body.email
        // const password = req.body.password
        const {email, password} = req.body
    if (email==="admin@server.com" && password === "1234"){
        return res.send({
            success: true,
            message: 'Login Succesfully'
        })
    }else {
        return res.send({
            success: false,
            message: 'Login Failed'
        })
    }
})

app.listen(8080, ()=>{
    console.log('App listening on port 8080')
})