# Setting up SQL database

Create a free postgresql database at:
https://www.elephantsql.com/

Grab the url of your new database so you can access it from the command line in your terminal.

# Useful SQL commands

## See tables that you created

`SELECT * FROM information_schema.tables WHERE table_schema='public' AND table_name!='pg_stat_statements'`

## Delete a table

`DROP TABLE table_name;`

## Create a table

```
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```

## Create card

`INSERT INTO cards (front, back) VALUES ('hello', 'world')`

# Creating tables

These commands will re-create tables in database

```
DROP TABLE GoogleUserInfo CASCADE;
DROP TABLE Cards CASCADE;
DROP TABLE Tags CASCADE;
DROP TABLE Junctions_tag_card CASCADE;


CREATE TABLE GoogleUserInfo
(
 _id            SERIAL PRIMARY KEY,
 sub            TEXT NOT NULL,
 picture        TEXT NULL,
 email          TEXT NOT NULL,
 email_verified BOOLEAN NULL
);

CREATE TABLE decks (
   _id SERIAL PRIMARY KEY,
   user_id INTEGER REFERENCES GoogleUserInfo (_id) NOT NULL,
   title varchar(255) NOT NULL,
   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE cards (
   _id SERIAL PRIMARY KEY,
   user_id INTEGER REFERENCES GoogleUserInfo (_id) NOT NULL,
   title varchar(255) NOT NULL,
   front TEXT NOT NULL,
   back TEXT NOT NULL,
   deck_id INTEGER REFERENCES decks (_id) NOT NULL,
   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
   _id SERIAL PRIMARY KEY,
   text TEXT NULL
);


CREATE TABLE Junctions_tag_card (
  tag_id INTEGER REFERENCES Tags(_id),
  card_id INTEGER REFERENCES Cards(_id),
  PRIMARY KEY (tag_id, card_id)
);

```
