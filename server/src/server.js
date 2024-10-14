require("dotenv").config();
const express = require("express"); //commonjs
const routerAPI = require("./routes/");
const connection = require("./config/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 8081;
const client = process.env.REACT_URL;

const corsOptions = {
  origin: client, // Change to your frontend's URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// config cors
app.use(cors(corsOptions));

// config cookieParser
app.use(cookieParser());

//config body-parser
app.use(bodyParser.json({ limit: "10mb" })); // Đặt giới hạn kích thước là 10MB
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

//config req.body
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//khai báo route
routerAPI(app);

(async () => {
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Backend Nodejs App listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
