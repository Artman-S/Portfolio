-- Active: 1667836772870@@127.0.0.1@3306@portfolio

DROP TABLE IF EXISTS `project`;

CREATE TABLE
    `project` (
        `id` int NOT NULL AUTO_INCREMENT,
        `title` varchar(150) DEFAULT NULL,
        `description` varchar(255) DEFAULT NULL,
        `link_project` varchar(150) DEFAULT NULL,
        `link_github` varchar(150) DEFAULT NULL,
        `image` blob,
        `status` varchar(45) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4
DROP TABLE IF EXISTS `user`;

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `firstname` varchar(25) NOT NULL,
        `lastname` varchar(25) NOT NULL,
        `birthday` date NOT NULL,
        `email` varchar(50) NOT NULL,
        `pw` varchar(25) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4