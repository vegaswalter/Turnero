drop database if exists turnosdh;
create database if not exists turnosdh;
use turnosdh;
drop table if exists users;

CREATE TABLE `turnosdh`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `turnosdh`.`orderly_turns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(200) NOT NULL,
  `box` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));
