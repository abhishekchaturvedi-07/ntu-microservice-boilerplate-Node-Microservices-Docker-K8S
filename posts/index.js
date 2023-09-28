const express = require('express');
//Random id generator
const { randomBytes } = require('crypto');
//Body Parser for returning the json representation
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
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
app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body
    posts[id] = {
        id:id,
        title: title,
    }
    // sending to event-bus that post has been created
    await axios.post('http://localhost:4005/events',{
        type: 'PostCreated',
        data: {
            id, title
        }
    })
    res.status(200).send(posts[id])
})

app.post('/events', (req,res) => {
    console.log('Event Received : ', req.body.type)
    res.send({})
})

//Listening
app.listen(4000, () => {
    console.log('MEthod 2 checking to update the K8S Deployment!!')
    console.log('Server running on port 4000')
})