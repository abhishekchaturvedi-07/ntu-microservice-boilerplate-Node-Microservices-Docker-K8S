const express = require('express');
//Random id generator
const { randomBytes } = require('crypto');
//Body Parser for returning the json representation
const bodyParser = require('body-parser')
const cors = require('cors')
// app.use(bodyParser.json()) <- Cannot use app before initialization

//Initialize the application
const app = express()

app.use(bodyParser.json()) //Use Here

app.use(cors()) // Cors constructor

// Dummy Posts
const posts = {}

//Methods
app.get('/posts', (req, res)=>{
    res.send(posts)
})
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body
    posts[id] = {
        id:id,
        title: title,
    }
    res.status(200).send(posts[id])
})

//Listening
app.listen(4000, () => {
    console.log('Server running on port 4000')
})