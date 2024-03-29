const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    },
});

const upload = multer({ storage });



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/uploadfile", upload.single("archivo"), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
});

app.post("/uploadmultiple", upload.array("archivos", 12), (req, res, next) => {
    const files = req.files;
    if (!files) {
        const error = new Error("Please choose files");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(files);
});

app.listen(8080, () => {
    console.log("Server up");
});
