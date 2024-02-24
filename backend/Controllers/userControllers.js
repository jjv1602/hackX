const expressAsyncHandler = require('express-async-handler');
const asyncHandler = require('express-async-handler')
const Doc = require("../models/docModels");
const Pat = require("../models/patientModels");
const generateToken = require('../util/generateToken');

const registerDoc = asyncHandler(async (req, res) => {

  const { name, email, password, pic, speciality, intro, yoe } = req.body;
  const userExists = await Doc.findOne({ email });
  
  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }


  const user = await Doc.create({
    name,
    email,
    password,
    pic,
    speciality,
    intro,
    yoe
  });

  // if user is successfully created that is the input follows the schema then this condition ->if(user)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),    //json web token see video 10 from 30:00
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const registerPat = asyncHandler(async (req, res) => {

  const { name, email, password, gender, bloodGroup, age } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  // else if user does not exist then create a new for this we use .create function
  // Calling userModels.js file
  const user = await Pat.create({
    name,
    email,
    password, gender, bloodGroup, age
  });

  // if user is successfully created that is the input follows the schema then this condition ->if(user)
  if (user) {
    // send response in json file
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),    //json web token see video 10 from 30:00

    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});


const authDoc = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Doc.findOne({ email });
  // .matchPassword is a function i.e is declared in userModel.js file which would decrypt the password
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), //json web token see video 10 from 30:00
      pic: user.pic,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const authPat = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;

  const user = await Pat.findOne({ name });
  // console.log(user);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


module.exports = { registerDoc, registerPat, authDoc, authPat };