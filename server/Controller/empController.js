const mongoose = require('mongoose')
const user = require('../model/empSchema.js')

const createEmployee = async(req, res, next)=>{
  console.log('');
  try{
    console.log(req.body);
    const {name, email, age, mobile, address, work, description} = req.body;

    // console.log(mobile, mobile.toString().length);

    if(!name || !email || !age || !mobile || !address || !work || !description){
      res.status(404).send("Please fill the data");
    }
    // res.json('data will be stored')
  
    const preEmp = await user.findOne({email:email})

    if(preEmp){
      res.status(404).send('employee already exist');
      return;
    }

    const data = new user({
      name, email, age, mobile, address, work, description
    })
  
    const savedata = await data.save();
    console.log('Saving data of new empoyee', savedata);

    if(savedata){
      // res.json('data saved')
      res.json('data stored')
      res.status(201).json(savedata)
      return;
    }

  }catch(error){
    console.log('Error occurred while creating employee',error);
  }
}

const updateEmployee =(req, res, next)=>{
  try{
    

  }catch(error){
    console.log('Error occurred while updating employee data',error);
  }
}

exports.updateEmployee = updateEmployee
exports.createEmployee = createEmployee;