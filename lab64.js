const express = require("express");
const multer = require("multer");
const app = express();

const armazenamento = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });

const upload = multer({ armazenamento });

app.post("/upload", upload.single('file'), (req, res) => {
    res.send("Upload realizado com sucesso!");
  });

app.get("/Inicio", function(req, res) {
    res.send("Pagina inicial: ");
});

app.get("/Sobre", function(req, res) {
    res.send("Sobre: ");
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const port = 3000;
app.listen(port, () => {
    console.log("Servidor rodando");
});