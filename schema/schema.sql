CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE note (
    id INT NOT NULL,
    note_title VARCHAR(100) NOT NULL,
    note_body VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
)