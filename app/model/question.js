module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Question = app.model.define("question", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    analysis: {
      type: TEXT,
      allowNull: false,
    },
    categoryId: {
      type: INTEGER,
      allowNull: true,
    },
  });

  Question.associate = function () {
    app.model.Question.belongsTo(app.model.Category, {
      foreignKey: "categoryId",
      targetKey: "id",
    });
  };
  Question.sync({ alter: true });
  return Question;
};
