const express = require("express");

const collection = require("./mongo");

const cors = require("cors");
// const { compare } = require("bcrypt");
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


    bcrypt.hash(password,saltRounds,async(err,hash)=>{
        if(err){
            console.error(err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

    const data = {
        email:email,
        password:password
    };

    try{
        const check = await collection.findOne({email:email});
        console.log(check.password)
        console.log(password)
        
        if(check){
            const passmatch = await compare(password, check.password);
            console.log(passmatch)
            if(passmatch){
                res.json("exist")
                console.log("Exists");
            }else{
                res.json("notexist");
                console.log("no pass");
            }
        }else{
            res.json("notexist")
            //-------------------------------------
            // await collection.insertMany([data])
            //-------------------------------------
            console.log("User created");
        }
    }catch(e){
        res.json("notexist")
    }
    });
});

app.listen(3001, ()=>{
    console.log("Connected");
})


