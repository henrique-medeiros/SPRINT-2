// FALTANDO ALTERAR VALORES
var database = require("../database/config")

function listar() {
    console.log("ACESSEI O EMPRESAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(emailEmpresarial, senhaEmp) {
    console.log("ACESSEI O EMPRESAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailEmpresarial, senhaEmp)
    var instrucao = `
        SELECT * FROM empresa WHERE emailEmpresarial = '${emailEmpresarial}' AND senhaEmp = '${senhaEmp}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, emailEmpresarial, telefoneEmpresarial, cidadeEstado, endereco, complemento, cep, cnpj, senhaEmp) {
    console.log("ACESSEI O EMPRESAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa, emailEmpresarial, telefoneEmpresarial, cidadeEstado, endereco, complemento, cep, cnpj, senhaEmp);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa, emailEmpresarial, telefoneEmpresarial, cidadeEstado, endereco, complemento, cep, cnpj, senhaEmp) VALUES ('${nomeEmpresa}', '${emailEmpresarial}', '${telefoneEmpresarial}', '${cidadeEstado}', '${endereco}', '${complemento}', '${cep}', '${cnpj}',  '${senhaEmp}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};