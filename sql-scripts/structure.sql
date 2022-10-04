drop database if exists turnosdh;
create database if not exists turnosdh;
use turnosdh;
drop table if exists users;

create table users (
	id int auto_increment,
    nombre varchar(55) not null,
    email  varchar(55) not null,
    password varchar(60) not null, 
    primary key (id),
    -- foreign key (categoryId) references categories(id)
);

create table orderly_turns