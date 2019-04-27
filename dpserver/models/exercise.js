module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true,
    },
    title: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    url:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    difficulty:{
      type:DataTypes.CHAR(55),
      allowNull:true
    },
    popularity_index:{
      type:DataTypes.FLOAT,
      allowNull:true
    }
  },{
    timestamps: false
  });
  Exercise.associate = (models) => {
    models.Exercise.hasMany(models.Submission, {foreignKey: 'exercise_id',sourceKey:'id'})
  };
  return Exercise;
};
