'use strict'

const Controller = require('egg').Controller;

class JsController extends Controller {
    async index() {
        const ctx = this.ctx;
        const result = await ctx.model.Js.find()
            .then(res => {
                ctx.success('查询成功', res);
            }).catch(error => {
                ctx.failure('查询失败', error);
            })
        return result;
    }

    async create() {
        const ctx = this.ctx;
        const query = ctx.request.body;
        const {title, analysis} = query;
        const result = await ctx.model.Js.create({
            title,
            analysis
        }).then((res) => {
            ctx.success("添加成功", res);
        }).catch((error) => {
            ctx.failure("添加失败", error);
        });
        return result;
    }

    async update() {
        const ctx = this.ctx;
        const query = ctx.request.body;
        const result = await ctx.model.Js.update({_id: query.id}, {$set: query})
            .then((res) => {
                ctx.success('修改成功', res);
            }).catch((error) => {
                ctx.failure('修改失败', error);
            })
        return result;
    }

    async show() {
        const ctx = this.ctx;
        const id = ctx.params.id;
        const result = await ctx.model.Js.find({_id: id})
            .then(res => {
                ctx.success('查询成功', res)
            }).catch((erros) => {
                ctx.failure('查询失败', res);
            })
        return result;
    }

    async destroy() {
        const ctx = this.ctx;
        const id = ctx.params.id;
        const result = await ctx.model.Js.remove({
            _id: id
        }).then((res) => {
            ctx.success('删除成功', res);
        }).catch(error => {
            ctx.failure('删除失败', error)
        })
        return result;
    }
}

module.exports = JsController;
