const path = require("path");
const cookieParser = require('cookie-parser')
const express = require("express");
 const session = require('express-session')
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express();
app.use(cookieParser())
app.use(cors());
const port = process.env.PORT || 3000;
const db = require("./config/db/");
const route = require("./routes");
app.use(express.static(path.join(__dirname, 'public')));
//morgan hien thi trang thai server vd:[13/Sep/2022:09:16:18 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
app.use(morgan("combined"));
//connect to MongoDB
db.connect();
// console.log("MongoDB connected", db)
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
//middleware
app.use(express.json())
app.use(methodOverride("_method"));
//XML HTTP REQUEST, fetch , axios , ..
//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
 //temple engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// route
route(app);
// 127.0.0.1:port
app.listen(port, () => {  console.log(`App listening on port http://localhost:${port}`);
});
 // total number

