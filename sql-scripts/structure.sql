drop database if exists turnosdh;
create database if not exists turnosdh;
use turnosdh;
drop table if exists users;

create table users (
	id int auto_increment,
    nombre varchar(55) not null,
    email  varchar(55) not null,
    password varchar(60) not null, 
    createdAt  ,
    updatedAt ,
    primary key (id),
    
);

create table orderly_turns
id int auto_increment,
    code int not null,
    box  int not null,
    createdAt  ,
    updatedAt ,
    deleted_at ,
    primary key (id),
    -- foreign key (code) references categories(id)