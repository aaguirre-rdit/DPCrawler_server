const Sequelize =  require("sequelize").Sequelize;
const express = require('express');
const models = require('../models');
const Op = Sequelize.Op;
const getExerciseList = async (req, res, next) => {
  let { difficulty } = req.query;
  console.log({difficulty});
  let Result;
  try {
    if (!difficulty){
      Result = await models.Exercise.findAll()
    }
    else{
      Result = await models.Exercise.findAll({
        where: {
          difficulty: {
            [Op.like]: difficulty
          }
        }
      })
    }
    res.status(200).json(Result)
  }
  catch(err){
    console.error(err);
    next()
  }
};
const getExerciseById = async(req, res, next) => {
  try{
    const Result = await models.Exercise.findOne({
      where: {
        id:req.params.id,
      }
    });
    res.status(200).json(Result)
  }
  catch(err){
    console.error(err);
    next()
  }


};
module.exports = {
  getExerciseList,
  getExerciseById
};
