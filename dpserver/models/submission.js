module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    exercise_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    language:{
      type:DataTypes.CHAR(50),
    },
    content:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
  },{
    timestamps: false
  });
  Submission.associate = (models) => {
    models.Submission.belongsTo(models.Exercise, {foreignKey: 'exercise_id'})
  };
  return Submission;
};
