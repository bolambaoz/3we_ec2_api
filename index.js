const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const moment = require("moment");

const { response } = require('express');
const port = process.env.PORT || 8080;
var axios = require("axios").default;
const server = require('http').createServer(app)

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Control = require('./models/PageCongrol');


app.use(bodyParser.json())


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://db-travel-blog:7JMCcvz0SSuvm6MA@cluster0.5ekbc.mongodb.net/ads_db?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MONGODB: Default Connection Established");
    } catch (error) {
      console.log(error);
    }   
 }

connectDB()

app.get('/production', async(request, response) => {

    try{
        const control = await Control.find()

        response.json(control[0])
        
    }catch(e){
        response.json({message: e})
    }
})

//TODO: LOGIN==REGISTER HERE-------------
// app.post('/register', async (req, res) => {
//     try{
//        var newUser = new User(req.body);
//        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
//        newUser.save(function(err, user) {
//          if (err) {
//            return res.status(400).json({ message: 'User email already exist or not valid'});
//          } else {
//            user.hash_password = undefined;
//            return res.json(user);
//          }
//        });
//     }catch(err){
//        res.json(err)
//     }
    
//  });
 
//  app.post('/login', async (req, res) => {
//     try{
//        User.findOne({
//           email: req.body.email
//        }, function(err, user) {
//           if (err) throw err;
//           if (!user || !user.comparePassword(req.body.password)) {
//              return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
//           }
//           return res.json({ 
//             token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs'),
//             user: user });
//        });
//     }catch(err){
//        res.json(err)
//     } 
//  });



server.listen(port,'0.0.0.0', () => console.log(`${port}'app is running'`));
