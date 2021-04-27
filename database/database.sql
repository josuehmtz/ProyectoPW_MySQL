CREATE DATABASE test; 

USE test;

CREATE TABLE tabla1 (
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    usuario VARCHAR (15) NOT NULL, 
    contraseña VARCHAR (20) NOT NULL, 
    nombre_s VARCHAR (50) NOT NULL, 
    apellido_pat VARCHAR (30) NOT NULL,
    apellido_mat VARCHAR (30) NOT NULL   
); 

DESCRIBE tabla1 ;