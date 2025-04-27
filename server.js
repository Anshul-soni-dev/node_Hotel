require('dotenv').config();
const express = require('express')
const app = express();
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const person = require('./models/person');
const MenuItem = require('./models/MenuItem');







  
   
const personRoutes = require('./routes/personRoutes');
app.use('/menu',personRoutes);

app.listen(PORT, ()=>{
    console.log(`listening port is running`)
    
})


