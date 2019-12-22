const jwt = require('jsonwebtoken') //引入jsonwebtoken

module.exports = (options, app) => {
    return async function userInterceptor(ctx, next) {
        let authToken = ctx.header.authorization // 获取header里的authorization
        if (authToken) {
            const res = verifyToken(authToken) // 解密获取的Token
            if (res._id) {
                await next()
            } else {
                ctx.failure('登录状态已过期')
            }
        } else {
            ctx.failure('请登陆后再进行操作')
        }
    }
}

//token是密匙
// 解密，验证
function verifyToken(token) {
    let res = ''
    try {
        const result = jwt.verify(token, 'token');
        const {exp} = result,
            current = Math.floor(Date.now() / 1000)
        if (current <= exp) res = result.data || {}
    } catch (e) {
        console.log(e)
    }
    return res
}