'use strict';
const Controller = require('egg').Controller;

class PriorityController extends Controller {
    async index() {
        const ctx = this.ctx;
        const result = await ctx.model.priority.list();
        ctx.success('查询成功',result);
    }
}

module.exports = PriorityController;
