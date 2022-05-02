var empresasModel = require("../models/empresasModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA empresasController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    empresasModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var emailEmpresarial = req.body.emailEmpresarialServer;
    var senhaEmp = req.body.senhaEmpServer;

    if (emailEmpresarial == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaEmp == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        empresasModel.entrar(emailEmpresarial, senhaEmp)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadEmpresa.html
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var emailEmpresarial = req.body.emailEmpresarialServer;
    var telefoneEmpresarial = req.body.telefoneEmpresarialServer;
    var cidadeEstado = req.body.cidadeEstadoServer;
    var endereco = req.body.enderecoServer;
    var complemento = req.body.complementoServer;
    var cep = req.body.cepServer;
    var cnpj = req.body.cnpjServer;
    var senhaEmp = req.body.senhaEmpServer;

    // Faça as validações dos valores
    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailEmpresarial == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaEmp == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresasModel.js
        empresasModel.cadastrar(nomeEmpresa, emailEmpresarial, senhaEmp)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}