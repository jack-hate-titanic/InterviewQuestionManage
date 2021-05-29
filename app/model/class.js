module.exports = (app) => {
  const { STRING, INTEGER, TEXT, BLOB } = app.Sequelize;
  // const Schema = mongoose.Schema;

  // const JsSchema = new Schema({
  //   title: { type: String },
  //   analysis: { type: String },
  // });

  // return mongoose.model("js", JsSchema, "marx");
  const Class = app.model.define("class", {
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
  Class.associate = function () {
    app.model.Class.hasMany(app.model.Js, {
      foreignKey: "classId",
      targetKey: "id",
    });
  };
  Class.sync({ alter: true });
  return Class;
};
