
// Sever Instantiate
// server Live --> Create own server

// This two line use to create own server
const express = require('express');
const app = express();

// used to parese req.body in express -> PUT OR POST
const bodyParser = require('body-parser');
//  specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


// activate the server on 3000 port

// step 2: app.listen (3000, () => behavear) 
app.listen(8000, () => {
    console.log("server Started at no 8000")
});

// create Routes 
app.get('/', (request, response) => {
    response.send("hello Jee, kaise ho saare");
})

app.post('/api/cars', (requset, response) => {
    const { name, brand } = requset.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('conenction Successful') })
    .catch((error) => { console.log("Recieved an error") })