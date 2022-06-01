var database = require("../database/config");

function buscarUltimasMedidas(idTransporte, limite_linhas) {
    instrucaoSql = `select 
                        lm35_temperatura, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_transporte = ${idTransporte}
                    order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTransporte) {
    instrucaoSql = `select 
                        lm35_temperatura, 
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_transporte 
                        from medida where fk_transporte = ${idTransporte} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}