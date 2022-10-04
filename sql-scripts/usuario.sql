use turnosdh;
insert into users (nombre, email, password)
values 
    ("Administrante",
    "admin@admin.com",
    "$2y$10$b3e6DSHsdUAmcDjSZ7n56uDsd0dNpbObWrqTby/KL9WwarQUlNdMG",
    ),
	("Pedro",
    "Pedro@gmail.com",
    "$2a$10$lh8vNlV5Em5tQVxTButtnuhj7UrE.g5N6v5C.lugxfaSCekW/rtfi",
    ),
    ("Ruben Dario",
    "rbdinsua@gmail.com",
    "$2a$10$P6nR6W1oV7s4Ij4s/riVqe0SZWl5R2G.LTkr7wpuSMToaNjFrMHG2",
    ),
    ("Leandro",
    "pipiromagnoli@gmail.com",
    "$2a$10$n7R/BMtfBg4cxCfylbrDlO6Ay6gNnJv9kUco/PM5hvo/q9iJc2Ely",
    );
select * from users;

