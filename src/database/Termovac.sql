CREATE DATABASE termovac;

USE termovac;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(50) NOT NULL,
emailEmpresarial VARCHAR(60) NOT NULL,
telefoneEmpresarial CHAR(13),
cidadeEstado VARCHAR(60),
endereco VARCHAR(60),
complemento VARCHAR(45),
cep CHAR(9),
cnpj CHAR(18),
senhaEmp INT
)AUTO_INCREMENT 200000;


CREATE TABLE aviso (
	id INT PRIMARY KEY auto_increment,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	momento DATETIME,
	fk_transporte INT
);

select * from usuario;
select * from aviso;
select * from medida;