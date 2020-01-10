let jwt = require('jsonwebtoken');

module.exports = {
  sign: ({ phonenumber, id }) => {
    return jwt.sign({
      phonenumber,
      id,
    }, 'gbll', {
      expiresIn: 60 * 60 * 24 //过期时间  以秒计算
    })
  },
  verify: (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'gbll', (err, decode) => {
        if (!err) {
          resolve(decode)
        } else {
          // console.log('jwt',err.message)
          reject(err.message)
        }
      })
    })
  }
}

