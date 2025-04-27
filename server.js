const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person = require('./models/person');
const MenuItem = require('./models/MenuItem');







  
   
const personRoutes = require('./routes/personRoutes');
app.use('/menu',personRoutes);

app.listen(3000, ()=>{
    console.log(`listening port is running`)
    
})


