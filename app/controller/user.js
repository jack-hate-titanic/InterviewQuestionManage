'use strict';
const Controller = require('egg').Controller;

const jwt = require('jsonwebtoken') //引入jsonwebtoken
class UserController extends Controller {
    async index() {
        const ctx = this.ctx;
        const token = ctx.get('Authorization');

        if (!token) { // 判断请求头有没有携带 token ,没有直接返回 401
            ctx.throw(401, 'no token detected in http header "Authorization"');
        }
        const res=jwt.verify(token, 'token');
        delete res.data.password;
        delete res.exp;
        delete res.iat;
        return ctx.success('',res);
    }
}

module.exports = UserController;