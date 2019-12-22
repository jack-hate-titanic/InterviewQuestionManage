const jwt = require('jsonwebtoken') //引入jsonwebtoken


//token是密匙
module.exports = {
    loginToken(data, expires = 7200) {
        const exp = Math.floor(Date.now() / 1000) + expires;
        const token = jwt.sign({data, exp}, 'token');
        return token
    }
}
