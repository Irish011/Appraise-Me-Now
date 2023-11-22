const express = require("express");

const collection = require("./mongo");

const cors = require("cors");
const { hash } = require("bcrypt");
// const { default: App } = require("./src/App");

const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/",cors(),(req,res) => {

})

app.post("/", async(req,res) => {
    const{email, password}=req.body


    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error: 'Internal Server Error'});
        }
    })
    const data = {
        email:email,
        password:hash
    }

    try{
        const check = await collection.findOne({email:email});

        if(check){
            res.json("exist")
            console.log("Exists");
        }else{
            res.json("notexist")
            //-------------------------------------
            await collection.insertMany([data])
            //-------------------------------------
            console.log("User created");
        }
    }catch(e){
        res.json("notexist")
    }
})

app.listen(3001, ()=>{
    console.log("Connected");
})


