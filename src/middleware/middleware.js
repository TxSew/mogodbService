
const jwt = require('jsonwebtoken')
const Accout = require('../app/models/Accout')
const middleware = (req, res, next) => {
   console.log(req.cookies)
  try {
  const token = req.cookies.token
  const ketqua = jwt.verify(token, 'mk')
     console.log(ketqua)
  Accout.findById({_id : ketqua._id})
    .then((data) => {
        console.log(data)
        console.log(data.role)
        return res.data = data.role
      })
    if (ketqua) {
      next()
    }
  }
  catch (err) {
    return res.json('ban can phai dang nhap')
  }
}
module.exports = middleware
