const Github = require('../utils/github');
const githubConfig = require('../config/github');
const models = require('../models');

const submitExercise = async (req, res, next)=>{
  const {language, content, exercise_id} = req.body;
  console.log(req.body,exercise_id)
  try{
    const exercise = await models.Exercise.findOne({
      where:{
        id:exercise_id
      }
    });

    const result = await models.Submission.create({
      language,
      content,
      exercise_id
    });
    const gh = new Github({
      username: githubConfig.username,
      password:githubConfig.password,
      auth:'basic',
      repository:githubConfig.repo,
      branchName:'master'
    });
    let fileExtension;
    if (language === 'python'){
      fileExtension = 'py'
    }
    else if(language === 'javascript'){
      fileExtension = 'js'
    }
    else if (language === 'java'){
      fileExtension = 'java'
    }
    const parsedTitle = exercise.title.split(' ').join('_');
    const commit = await gh.saveFile({
      repository: gh.repository,
      branchName:'master',
      filename:`${exercise.difficulty}/${parsedTitle}/${parsedTitle}.${fileExtension}`,
      content:content,
      commitTitle:'test'
    }).then(res => {return res})
      .catch(err => console.error(err))
    res.status(200).send({
      success:true,
      commit:commit
    })
  } catch(err){
    console.error(err)
    res.status(400).send({
      success:false,
      error:err
    })
  }

};
module.exports = {
  submitExercise
};
