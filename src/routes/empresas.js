var express = require("express");
var router = express.Router();

var empresasController = require("../controllers/empresasController");

router.get("/", function (req, res) {
    empresasController.testar(req, res);
});

router.get("/listar", function (req, res) {
    empresasController.listar(req, res);
});

//Recebendo os dados do html cadEmpresa e direcionando para a função cadastrar de empresasController.js
router.post("/cadastrar", function (req, res) {
    empresasController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    empresasController.entrar(req, res);
});

module.exports = router;