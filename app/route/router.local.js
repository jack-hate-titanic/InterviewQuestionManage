module.exports = (app) => {
  const { router, controller } = app;
  // 试题部分
  router.get("/api/js", controller.js.index);
  router.post("/api/js", controller.js.create);
  router.delete("/api/js/:id", controller.js.destroy);
  router.put("/api/js", controller.js.update);
  router.get("/api/js/:id", controller.js.show);

  // 类别部分
  router.get("/api/class", controller.class.index);
  router.post("/api/class", controller.class.create);
  router.delete("/api/class/:id", controller.class.destroy);
  router.put("/api/class", controller.class.update);
  router.get("/api/class/:id", controller.class.show);

  router.get("/api", controller.js.index);
  router.resources("file", "/api/file", controller.file);
};
