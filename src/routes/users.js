const express = require('express');
const router = express.Router();
const User = require('../models/user');

//LOGIN
router.post('/users/login', async (req, res) => {
    try {
        const credentials = req.body;
        const user = await User.findOne(credentials);

        if(user) {
            res.json({ error: false, user})
        } else {
            res.json({ error : true, message: "no users found"})
        }

    } catch (err) {
        res.json({ error: true, message : err.message})
    }
})

//GET ALL USERS
router.get('/users', async (req, res) => {

    try {
       const users = await User.find({});
       res.json({ error: false, users });
 
    } catch (err) {
       res.json({error:true, message: err.message});
    }
  });
 
  //GET USER BY ID
  router.get('/users/:id', async (req, res) => {
 
    try {
       const id = req.params.id;
       const user = await User.findById(id);
       res.json({ error: false, user });
 
    } catch (err) {
       res.json({error:true, message: err.message});
    }
  });
 
  //CREATE NEW USER
  router.post('/users', async(req, res) => {
 
     try {
      const user = req.body;
      const response = await new User(user).save();
      res.json({error: false, User, response});
 
     } catch (err) {
         res.json({error : true, message: err.message});
 
     }
  });
 
  //UPDATE USER
  router.put('/users/:id', async(req, res) => {
 
    try {
    
     const id = req.params.id;
     const new_User = req.body;
     
     const user = await User.findByIdAndUpdate(id, new_User);
     res.json({error: false, user });
 
    } catch (err) {
        res.json({error : true, message: err.message});
 
    }
 });
 
 //DELETE USER
  router.delete('/users/:id', async (req, res) => {
 
    try {
       const id = req.params.id;
       const user = await User.findByIdAndDelete(id);
       res.json({ error: false });
 
    } catch (err) {
       res.json({error:true, message: err.message});
    }
  });

module.exports = router;