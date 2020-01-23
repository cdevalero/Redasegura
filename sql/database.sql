CREATE DATABASE registro_usuarios;

USE registro_usuarios;

SHOW TABLES

CREATE TABLES usuario
(
    id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cedula INT,
    correo VARCHAR(23),
    clave VARCHAR(12),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE usuario;

INSERT INTO usuario (cedula, correo, clave) values (0, 'me@mail.com', '1234');

SELECT * FROM usuario