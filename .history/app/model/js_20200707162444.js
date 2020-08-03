module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const JsSchema = new Schema({
    title: { type: String },
    analysis: { type: String },
  });

  return mongoose.model("js", JsSchema, "js");
};
