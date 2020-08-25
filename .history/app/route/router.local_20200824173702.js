module.exports = (app) => {
  const { router, controller } = app;
  // get js
  router.get("/api/js", controller.js.index);
  router.post("/api/js", controller.js.create);
  router.delete("/api/js/:id", controller.js.destroy);
  router.put("/api/js", controller.js.update);
  router.get("/api/js/:id", controller.js.show);

  router.get("/api", controller.js.index);
  router.resources("file", "/api/v1/file", controller.file);
};
