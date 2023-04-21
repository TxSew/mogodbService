
const jwt = require('jsonwebtoken')
const Accout = require('../app/models/Accout')
const middleware = async (req, res, next) => {
  try {
    const token = req.cookies.token
    const ketqua = jwt.verify(token, 'mk')
    Accout.findById({ _id: ketqua._id })
      .then((data) => {
        console.log('data', data)
        res.data = data.role
      })
    if (ketqua) {
      next()
    }
  }
  catch (err) {
    return res.json('ban can phai dang nhap!')
  }
}
module.exports = middleware

