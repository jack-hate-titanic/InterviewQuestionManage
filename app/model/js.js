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
  });
  Js.sync({ alter: true });
  return Js;
};
