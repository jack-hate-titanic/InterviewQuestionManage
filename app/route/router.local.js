module.exports = (app) => {
  const { router, controller } = app;
  // 登录接口
  router.post("/api/login", controller.login.login);
  // 试题部分
  router.get("/api/question", controller.question.index);
  router.post("/api/question", controller.question.create);
  router.delete("/api/question/:id", controller.question.destroy);
  router.put("/api/question", controller.question.update);
  router.get("/api/question/:id", controller.question.show);

  // 类别部分
  router.get("/api/category", controller.category.index);
  router.post("/api/category", controller.category.create);
  router.delete("/api/category/:id", controller.category.destroy);
  router.put("/api/category", controller.category.update);
  router.get("/api/category/:id", controller.category.show);

  router.post("/api/file", controller.file.create);
};
