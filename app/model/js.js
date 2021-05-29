module.exports = (app) => {
  const { STRING, INTEGER, TEXT, BLOB } = app.Sequelize;
  // const Schema = mongoose.Schema;

  // const JsSchema = new Schema({
  //   title: { type: String },
  //   analysis: { type: String },
  // });

  // return mongoose.model("js", JsSchema, "marx");
  const Js = app.model.define("js", {
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
    classId: {
      type: INTEGER,
      allowNull: true,
    },
  });

  Js.associate = function () {
    app.model.Js.belongsTo(app.model.Class, {
      foreignKey: "classId",
      targetKey: "id",
    });
  };
  Js.sync({ alter: true });
  return Js;
};
