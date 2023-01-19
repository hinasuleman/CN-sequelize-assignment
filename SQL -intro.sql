use bwh2t9axoefjqr6ekody;
SHOW TABLES;

CREATE TABLE movies (
					title VARCHAR(255) NOT NULL UNIQUE,
                    actor VARCHAR(255) DEFAULT "Not Known",
                    director VARCHAR(255) DEFAULT "Unknown"
                    );
                    
INSERT INTO movies VALUES ("Spiderman", "Andrew Grafield", "Marc Webb");
INSERT INTO movies (title, actor) VALUES ("Men in Black", "Tommy");
INSERT INTO `bntm5xu3d6kzjytk51lp`.`movies` (`title`, `actor`) VALUES ('Casablanca', 'Humphrey Bogart');
SELECT * FROM movies;
SELECT title FROM movies;

-- CREATE 
INSERT INTO movies (title, actor) VALUES ("MIB2", "Tommy");

-- READ 
SELECT * FROM movies;

-- UPDATE 


-- DELETE
