// Middleware để kiểm tra xem người dùng đã đăng nhập chưa và có quyền truy cập vào trang admin hay không
const adminMiddleware = (req, res, next) => {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  console.log(req.session.user)
  if (!req.session.user) {
    return res.redirect('/carts/login');
  }
  // Kiểm tra xem người dùng có quyền truy cập vào trang admin hay không
  if (req.session.user.role !== 'admin') {
    return res.status(403).send('Bạn không có quyền truy cập trang này');
  }
  next()
}
module.exports = adminMiddleware
