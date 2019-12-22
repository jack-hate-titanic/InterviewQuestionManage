// 'use strict';
// const Controller = require('egg').Controller;
//
// class PriorityController extends Controller {
//     async list() {
//         const ctx = this.ctx;
//         const result = await ctx.service.priority.list();
//         ctx.success('查询成功',result);
//     }
// }
//
// module.exports = PriorityController;
'use strict'
const Controller = require('egg').Controller;
const utility=require("utility");
class LoginController extends Controller {
    async login(){
        const ctx=this.ctx;
        const query=ctx.request.body;
        const {username, password} = query;
        const user=await ctx.model.User.findOne({username});
        if(!user){
            return ctx.failure("该用户不存在");
        }
        if(user.password!==utility.md5(utility.md5(password))){
            return ctx.failure("密码错误");
        }
        const token=ctx.helper.loginToken(user);
        return ctx.success('登录成功',token);
    }

    async regist() {
        const ctx = this.ctx;
        const query = ctx.request.body;
        const {username, password, gender} = query;
        const user = await ctx.model.User.findOne({username});
        if (user) {
            return ctx.failure('该用户已被注册')
        }

        const result = await ctx.model.User.create({
            username,
            password:utility.md5(utility.md5(password)),
            gender
        }).then((res) => {
            const token=ctx.helper.loginToken(res);

            ctx.success('注册成功',token)
        }).catch(() => {
            ctx.failure('注册失败')
        });
        return result;

    }
}

module.exports = LoginController;