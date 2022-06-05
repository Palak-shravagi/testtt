const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
app.use(express.json());
constUser = require('./models/userSchema');
const info = require('./models/fileSchema');
const cors = require("cors");
app.use(express.json());
app.use(require('./router/auth'));
const multer = require("multer");
const upload = multer({
  dest: "./uploads/",
});

//middleware
const middleware = (req, res, next) => {
    console.log("hello middleware");
    next();
};

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DB).then(() => {
    console.log("DB Connected");
}).catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send(`hello world`);
});

app.get('/about', middleware, (req, res) => {
    console.log(`hello middleware from about`);
    res.send(`hello world from about`);
});

app.get('/contact', (req, res) => {
    res.send(`hello world from contact`);
});

app.get('/login', (req, res) => {
    res.send(`hello world from login`);
});

// app.get('/register', (req, res) => {
//     res.send(`hello world register`);
// });


// app.post("/addinformation", async (req, res) => {
//     try {
//       const newfileSchema = new info(req.body);
//       const success = await newfileSchema.save();
//       if (success) {
//         return res.Status(201).json({ message: "Added Successfully" });
//       } else {
//        return  res.status(266).json({ err: "Error adding data" });
//       }
//     } catch (err) {
//       res.status.json({ err: "Error adding data", code: err.code });
//     }
//   });

// app.post("/upload",async (req,res)=>{

// });

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});