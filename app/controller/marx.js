"use strict";

const Controller = require("egg").Controller;

class MarxController extends Controller {
  async index() {
    const ctx = this.ctx;
    const result = await ctx.model.Marx.find()
      .then(res => {
        ctx.success("查询成功", res);
      })
      .catch(error => {
        ctx.failure("查询失败", error);
      });
    return result;
  }
}

module.exports = MarxController;
