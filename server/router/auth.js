const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }));
router.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
require('../db/conn');
router.use(bodyParser.urlencoded({ extended: true }));
const User = require('../models/userSchema');
const Filedb = require('../models/fileSchema');
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const Axios = require("axios");
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


const upload = require("../common");

const Upload = require("../upload");

const fs = require('fs');
const { Navigate } = require('react-router-dom');
//AWS CONFIGURATIONS

// const { uploadFile } = require("../s3");
// const {getFileStream} =require("../s3");
// const fs = require("fs");
// const util = require("util");
// const unlinkFile = util.promisify(fs.unlink);

// var AWS = require('aws-sdk');


router.use(cookieParser());
router.use(express.static(__dirname + "public/"));

const { google } = require("googleapis");
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

const filePath = path.join(__dirname, 'example.jpg');


router.get('/', (req, res) => {
    res.send(`hello world from router js`);
});

// //define storage for the images

// const storage = multer.diskStorage({
//     //destination for files
//     destination: function (request, file, callback) {
//       callback(null, './public/uploads/images');
//     },

//     //add back the extension
//     filename: function (request, file, callback) {
//       callback(null, Date.now() + file.originalname);
//     },
//   });

//   //upload parameters for multer
//   const uploadd = multer({
//     storage: storage,
//     limits: {
//       fieldSize: 1024 * 1024 * 75,
//     },
//   });

// router.post('/register', (req, res) => {
//     console.log(req.body);
//     console.log("hii")
//     const { name, username, email, phone, college, password, cpassword } = req.body;

//     if (!name || !username || !email || !phone || !college || !password || !cpassword) {
//         return res.json({ error: "plz fill the details properly :" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" });
//             }
//             const user = new User({ name, username, email, phone, college, password, cpassword })

//             user.save().then(() => {

//             }).catch((err) => res.status(500).json({ error: "failed to registred..." }));

//         }).catch(err => { console.log(err) });
// });

// Single file Upload - image key should be passed postman

router.get('/LoginHome', authenticate, (req, res) => {
    console.log("login succesfully .... this is home page ");
    res.send(req.rootUser);
});
router.post('/editprofile', authenticate, (req, res) => {
    console.log("editprofile ");
    User.findById(req.user.id, function(err, user) {

        // todo: don't forget to handle err

        if (!user) {
            req.flash('error', 'No account found');
            return res.redirect('/editprofile');
        }

        // good idea to trim 
        var name = req.body.name.trim();
        var email = req.body.email.trim();
        var username = req.body.username.trim();


        // validate 
        if (!email || !username || !name) { // simplified: '' is a falsey
            req.flash('error', 'One or more fields are empty');
            return res.redirect('/editprofile'); // modified
        }

        // no need for else since you are returning early ^
        user.email = email;
        user.name = name;
        user.username = username;

        // don't forget to save!
        user.save(function(err) {

            // todo: don't forget to handle err

            Navigate('/profile');
        });
    });
});

router.post("/single", upload.single("image"), async(req, res, next) => {
    console.log(req.file); // UPLOADED FILE DESCRIPTION RECEIVED

    //   console.log(__dirname);
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'tmp.jpg', //This can be name of your choice
                mimeType: 'image/jpg',
            },
            media: {
                mimeType: 'image/jpg',
                body: fs.createReadStream(path.join(req.file.path)),
            },
        });

        fs.unlink(path.join(req.file.path), (err) => {
            if (err) throw err;
            console.log("file deleted from server");
        });

        console.log(response.data);
        res.send("uploaded successfully");
    } catch (error) {
        console.log(error.message);
    }
});
// Multiple files Upload - images key should be passed in postman
router.post("/multiple", upload.array("images"), (req, res) => {
    console.log(req.files); // UPLOADED FILE DESCRIPTION RECEIVED
    res.send({
        status: "success",
        message: "Files uploaded successfully",
        data: req.files,
    });
});




router.post('/register', async(req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const college = req.body.college;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (!name || !username || !email || !phone || !college || !password || !cpassword) {
        console.log("Wrong ");
        return res.json({ error: "plz fill the details properly :" })
    }
    console.log(username);
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            console.log("user found\n");
            return res.status(422).json({ error: "email already exist" });
        } else {
            console.log("NOT FOUND");
        }

        const userD = new User({ name: name, username: username, email: email, phone: phone, college: college, password: password, cpassword: cpassword });
        const success = await userD.save();
        if (success) {
            console.log("Successssss");
            return res.status(201).json({ message: "user registred" });
        } else {
            return res.status(422).json({ message: "Error occured" });
        }
    } catch (err) {
        console.log(err);
    }
});





//login route

//login route
router.get('/islogedin', authenticate, async(req, res) => {
    res.status(266).json({ message: "User Loged In" });
});


//login route
router.post('/login', async(req, res) => {
    console.log(req.body);
    console.log("inside login route....");
    let token;
    try {
        // const { username, password } = req.body;
        console.log("inside block");
        if (!req.body.username || !req.body.password) {
            console.log("inside login route if block");
            return res.status(400).json({ error: "please fill the required data.." });

        }

        // const userLogin = await User.findOne({ username: email });
        const userLogin = await User.findOne({ username: req.body.username });

        if (userLogin) {
            const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
            console.log(isMatch);
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 275489859),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "user error" });
                console.log("user error");
            } else {
                console.log("user login successfully");
                res.json({ message: "user signin successfully.." });
            }
        } else {
            res.status(400).json({ error: "invalid credential" });
            console.log("invalid credentials      ...................    user not found");
        }

    } catch (err) {
        console.log(err);
    }

})


//Form route
router.post("/addinformation", upload.single("files"), authenticate, async(req, res) => {
    // console.log(req.file);
    console.log(req.body);
    let token;
    const Title = req.body.title;
    const Dept = req.body.department;
    const Domain = req.body.domain;
    const Language = req.body.lang;
    const academicYear = req.body.academicYear;

    const uId = req.userID;



    // const File;
    // const Year = req.body.year;
    const Guide = req.body.guideName;

    console.log(JSON.stringify(Title));
    console.log("add info route ");
    try {
        //  console.log(filedb);

        const response = await drive.files.create({
            requestBody: {
                name: 'tmp', //This can be name of your choice
                mimeType: 'application/zip',
            },
            media: {
                mimeType: 'application/zip',
                body: fs.createReadStream(path.join(req.file.path)),
            },
        });

        fs.unlink(path.join(req.file.path), (err) => {
            if (err) throw err;
            console.log("file deleted from server");
        });

        console.log(response.data);

        var tmp = response.data;
        var fileID = tmp.id;
        console.log(fileID + "   FileID");


        await drive.permissions.create({
            fileId: fileID,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });

        const result = await drive.files.get({
            fileId: fileID,
            fields: "webViewLink",
        });

        const File = result.data.webViewLink;
        console.log(File);
        const filedb = new Filedb({
            title: Title,
            department: Dept,
            files: File,
            domain: Domain,
            lang: Language,
            academicYear: academicYear,
            guideName: Guide,
            userID: uId,
        });
        console.log(filedb);
        const success = await filedb.save();
        if (success) {
            console.log("Successssss");
            return res.status(201).json({ message: "data saved.." });
        } else {
            return res.status(422).json({ message: "Error occured while saving data" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post("/resumeUpload", Upload.single("pdf"), async(req, res, next) => {
    try {
        console.log(req.file);
        const stuId = "req.userID";
        const result = await uploadFile(req.file, stuId);
        console.log("S3 response", result);

        fs.unlink(path.join(req.file.path), (err) => {
            if (err) throw err;
            console.log("file deleted from server");
        });

        const filter = {
            _id: stuId,
        };
        stuId = stuId + path.extname(file.originalname);
        const update = {
            resume: stuId,
        };
        const user = await Student.findOneAndUpdate(filter, update);

        res.send({
            status: "success",
            message: "File uploaded successfully",
            data: req.file,
        });
    } catch (err) {
        console.log(err);
    }
});


////////////////////    Fetch data Routes ////////////////////////////

router.get("/myProjects", authenticate, async(req, res) => {
    const userID = req.userID;
    try {
        const data = await Filedb.find({ userID: userID });
        console.log(data);
        if (data) {
            // res.status(201).json({message: "Success"});
            res.send(data);
        }
    } catch (err) {
        console.log(err);
    }
});

router.get("/allProjects", authenticate, async(req, res) => {
    const userID = req.userID;
    try {
        const data = await Filedb.find();
        console.log(data);
        if (data) {
            // res.status(201).json({message: "Success"});
            res.send(data);
        }
    } catch (err) {
        console.log(err);
    }
});

router.get("/sefrchBar", authenticate, async(req, res) => {

    try {
        const data1 = await Filedb.find({
            department: new RegExp(req.body.keyWord),
        });
        const data2 = await Filedb.find({
            domain: new RegExp(req.body.keyWord),
        });
        const data3 = await Filedb.find({
            lang: new RegExp(req.body.keyWord),
        });

        const data4 = await Filedb.find({ academicYear: req.body.keyWord, });

        let arr = [];
        arr.push(data1);
        arr.push(data2);
        arr.push(data3);
        arr.push(data4);

        console.log(arr);
        res.send(arr);
    } catch (err) {
        console.log(err);
    }
});

router.get("/filter", authenticate, async(req, res) => {
    const dept = req.body.department;
    const domain = req.body.domain;
    const aYear = req.body.academicYear;
    try {
        const data = await Filedb.find({
            department: new RegExp(dept),
            domain: new RegExp(domain),
            academicYear: new RegExp(aYear),
        });

        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;