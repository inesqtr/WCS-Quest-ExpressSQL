CREATE TABLE musicbands (
   id int AUTO_INCREMENT,
   name varchar(100),
   starting_date date,
   isActive boolean,
   num_of_elements integer,
   PRIMARY KEY (id)
);

INSERT INTO musicbands (name, starting_date, isActive, num_of_elements) VALUES 
   ('Arcade Fire', '2000-01-01', true, 7),
   ('Tool', '1990-02-02', true, 4),
   ('And So I Watch You From Afar', '2005-03-03', true, 4),
   ('Arctic Monkeys', '2002-04-04', true, 4),
   ('Lou Reed','1958-05-05', false, 1),
   ('Porcupine Tree', '1987-06-06', false, 5),
   ('Pulp', '1978-07-07', false, 6),
   ('Leon Bridges', '2014-08-08', true, 1);