const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

function connectDB(){

    mongoose.connect('mongodb+srv://mamathamacharla:loveandthunder@cluster0.r2d8y1v.mongodb.net/test', {useUnifiedTopology: true, useNewUrlParser: true})
    
    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('MongoDB succesful')
    })
    connection.on('error', ()=>{
        console.log('connection error')
    })
}
connectDB()

module.exports = mongoose