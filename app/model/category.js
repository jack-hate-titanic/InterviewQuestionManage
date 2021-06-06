module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Category = app.model.define("category", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  });
  Category.associate = function () {
    app.model.Category.hasMany(app.model.Question, {
      foreignKey: "categoryId",
      targetKey: "id",
    });
  };
  Category.sync({ alter: true });
  return Category;
};
