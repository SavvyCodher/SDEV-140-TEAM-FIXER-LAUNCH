const express = require("express");
const Ad = require("./models/ad");
var cors = require('cors')
// const bodyParser = require('body-parser')
const jwt = require('jwt-simple')
const User = require("./models/users")

const app = express();
app.use(cors())

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

const router = express.Router();
const secret = "supersecret"

//creating a new user
router.post("/user", async(req,res) =>{
   if(!req.body.username || !req.body.password){
      res.status(400).json({error: "Missing username or password"})
   }

   const newUser = await new User({
      username: req.body.username,
      password: req.body.password,
      status: req.body.status
   })

   try{
      await newUser.save()
      console.log(newUser)
      res.sendStatus(201) //created
   }
   catch(err){
      console.log(err)
      res.status(400).send(err)
   }
})

// Get list of all ads in the database
router.get("/ads", async(req,res) =>{
   const UserId = req.query.uid
   // filter for userid or no userid
   const Filter = UserId ? { UserId } : {}
   console.log(Filter)
   try{
      const ads = await Ad.find(Filter)
      res.send(ads)
      console.log(ads)
   }
   catch (err){
      console.log(err)
      res.status(400).send(err)
   }

})

//Grab a single ad in the database
router.get("/ads/:id", async (req,res) =>{
   try{
      const ad = await Ad.findById(req.params.id)
      res.json(ad)
   }
   catch (err){
      res.status(400).send(err)
   }
})

//added an ad to the database
router.post("/ads", async(req,res) =>{
   console.log("Hit",req.body)
   try{
      const ad = await new Ad(req.body)
      await ad.save()
      res.status(201).json(ad)
      console.log(ad)
   }
   catch(err){
      console.log(err)
      res.status(400).send(err)

   }
      
   
})

//update is to update an existing record/resource/database entry..it uses a put request
router.put("/ads/:id/apply", async(req,res) =>{
   //first we need to find and update the ad the front end wants us to update.
   //to do this we need to request the id of the ad from request
   //and the find it in the database and update it
   try{
      const ad = req.body
      await Ad.updateOne({_id: req.params.id},{
         $push: {
            Applicants: ad.applicantid
         }
      })
      console.log(ad)
      res.sendStatus(204)
   }
   catch(err){
      res.status(400).send(err)
   }
})

router.delete("/ads/:id", async(req,res) =>{
   //method or function in mongoose/mongo to delete a single instance of a ad or object 
   try{
      const ad = await Ad.findById(req.params.id)
      console.log(ad)
      await Ad.deleteOne({ _id: ad._id })
      res.sendStatus(204)
   }
   catch(err){
      res.status(400).send(err)
   }
})
app.use("/api", router);

app.listen(3001);
