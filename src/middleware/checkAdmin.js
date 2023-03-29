const checkAdmin = (req, res, next) => {
   if(res.data === 'admin') {
     next()
  } else {
     res.json('not person')
  }
}
 module.exports = checkAdmin
