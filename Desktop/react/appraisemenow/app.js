const express = require("express");

const {collection} = require("./mongo");

const cors = require("cors");
// const { default: App } = require("./src/App");

const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/",cors(),(req,res) => {

})

app.post("/", async(req,res) => {
    const{email, password}=req.body


    // bcrypt.hash(password,saltRounds,async(err,hash)=>{
    //     if(err){
    //         console.error(err);
    //         return res.status(500).json({error: 'Internal Server Error'});
    //     }

    // const data = {
    //     email:email,
    //     password:hash
    // };

    // try{
    //     const check = await collection.findOne({email:email});

    //     if(check){
    //         res.json("exist")
    //         console.log("Exists");
    //     }else{
    //         res.json("notexist")
    //         //-------------------------------------
    //         await collection.insertMany([data])
    //         //-------------------------------------
    //         console.log("User created");
    //     }
    // }catch(e){
    //     res.json("notexist")
    // }
    // });

    try{
        const user = await collection.findOne({email: email});
        if (user) {
            // If the user exists, compare the entered password with the hashed password in the database
            const passwordMatch = await bcrypt.compare(password, user.password);
      
            if (passwordMatch) {
              // If the password matches, respond with "exist"
              res.json("exist");
              console.log("Login successful");
            } else {
              // If the password does not match, respond with "notexist"
              res.json("notexist");
              console.log("Incorrect password");
                }
            }else {
                // If the user does not exist, respond with "notexist"
                res.json("notexist");
                console.log("User does not exist");
              }

    } catch(e){
        console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

// app.get("/getdata",cors(),(req,res) => {
//     tasks.
// })

app.listen(3001, ()=>{
    console.log("Connected");
})