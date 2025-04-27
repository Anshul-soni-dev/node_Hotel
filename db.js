const mongoose =require('mongoose');
//const mongoURL =  'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('connected',()=> {
    console.log('connected to mongodb server');
    
});
db.on('error',()=> {
    console.log('error server');
    
});
db.on('disconnected',()=> {
    console.log('disconnected to mongodb server');
    
});
module.exports = db;