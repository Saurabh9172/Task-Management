CREATE DATABASE task_management;

USE task_management;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    time DATETIME NOT NULL,
    status ENUM('pending', 'completed') DEFAULT 'pending'
);
