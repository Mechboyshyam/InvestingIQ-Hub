const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());

// api start here


// write api under this space

// app.use(express.static(path.join(__dirname,'..','client','build')));

// app.get('*',(req,res)=>{res.sendFile(path.join(__dirname,'..','client','build','index.html'))});
app.get('/', (req,res)=>{
    res.json({
        message:"Welcome, to InvestingIQ-Hub"
    })
})


const PORT= process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})