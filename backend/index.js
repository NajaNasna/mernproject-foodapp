var express = require('express');
const dotenv = require("dotenv").config();
var app = express();
const port = process.env.port
// const cors = require('cors')
const mongoDB = require('./db')
mongoDB();


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ); 
    next()
})


// app.use(cors())
app.use(express.json())

app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))


app.get('/', function (req, res) {
res.send("Welocme to GeeksforGeeks..!");
});




app.listen(port,()=>{
    console.log(`server started at port ${port}`)
});