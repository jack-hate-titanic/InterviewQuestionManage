"use strict";

const Controller = require("egg").Controller;
const { pickBy, identity } = require("lodash");

class Question extends Controller {
  async index() {
    const ctx = this.ctx;
    const {
      query: { page = 1, count = 10, categoryId },
    } = ctx;
    const condition = { categoryId };
    const result = await ctx.model.Question.findAndCountAll({
      where: pickBy(condition, identity),
      limit: count,
      offset: (page - 1) * count,
    })
      .then((res) => {
        ctx.success("", res);
      })
      .catch((error) => {
        ctx.failure("", error);
      });
    return result;
  }

  async create() {
    const ctx = this.ctx;
    const query = ctx.request.body;
    const { title, analysis, categoryId } = query;
    const result = await ctx.model.Question.create({
      title,
      analysis,
      categoryId,
    })
      .then((res) => {
        ctx.success("添加成功", res);
      })
      .catch((error) => {
        ctx.failure("添加失败", error);
      });
    return result;
  }

  async update() {
    const ctx = this.ctx;
    const query = ctx.request.body;
    const result = await ctx.model.Question.update(
      {
        title: query.title,
        analysis: query.analysis,
        categoryId: query.categoryId,
      },
      {
        where: {
          id: query.id,
        },
      }
    )
      .then((res) => {
        ctx.success("修改成功", res);
      })
      .catch((error) => {
        ctx.failure("修改失败", error);
      });
    return result;
  }

  async show() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const result = await ctx.model.Question.findByPk(id)
      .then((res) => {
        ctx.success("", res);
      })
      .catch((erros) => {
        ctx.failure("", res);
      });
    return result;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const result = await ctx.model.Question.destroy({
      where: {
        id,
      },
    })
      .then((res) => {
        ctx.success("删除成功", res);
      })
      .catch((error) => {
        ctx.failure("删除失败", error);
      });
    return result;
  }
}

module.exports = Question;
