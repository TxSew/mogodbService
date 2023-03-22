const checkAdmin = (req, res, next) => {
  const role = res.data
   console.log('roe',role)
   if(role === 'admin') {
     next()
  } else {
     res.json(' not person')
  }
}
 module.exports = checkAdmin
