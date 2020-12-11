

CREATE DATABASE DB_RAJ_STORE; 

USE DB_RAJ_STORE;


CREATE TABLE usuarios(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    correo VARCHAR(100) NOT NULL
);
ALTER TABLE usuarios 
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios 
    MODIFY id INT(11) 
    NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

INSERT INTO USUARIOS(id, username, password, nombre, apellido, correo, celular) 

    DESCRIBE usuarios;

CREATE TABLE productos(
    id INT(11) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    img  TEXT NOT NULL,
    categoria VARCHAR (40) NOT NULL ,
    descripcion VARCHAR (200) NOT NULL
);
ALTER TABLE productos 
    ADD PRIMARY KEY (id);

ALTER TABLE productos
    MODIFY id INT(11) 
    NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;


    CREATE TABLE tipo_usuarios(
    id_t INT(11) NOT NULL,
    descripcion VARCHAR (50) NOT NULL, 
    id INT(11), 
    PRIMARY KEY (id_t),
    FOREIGN KEY (id) REFERENCES usuarios(id)
    );