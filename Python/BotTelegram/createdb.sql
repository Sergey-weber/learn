create table budget(
  codename varchar(255) primary key,
  daily_limit interger
);

create table category(
  codename varchar(255) primary key,
  name varchar(255),
  is_base_expense boolean,
  aliases test
);

create table expense(
  id interger primaty key,
  amount integer,
  created date,
  category_codename interger,
  raw_text text,
  FOREIGN KEY(category_codename) REFERENCES category(codename)
);

insert into category(codename, name, is_base_expense, aliases)
  values
    ("products", "продукты", true, "еда"),
    ("books", "книги", false, "литература, литраб лит-ра");