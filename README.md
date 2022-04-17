# Expense_Tracker

This is just a project that I am making to incorporate express, postgresql and react to create a basic expense tracker!

Here is the input for the database table that I made so that we can keep track!

copy paste this in postgresql

CREATE TABLE users(
ID SERIAL PRIMARY KEY,
name VARCHAR (30),
email VARCHAR(30),
password VARCHAR(30)
);

CREATE TABLE expense_tracker(
ID SERIAL PRIMARY KEY,
price VARCHAR(30),
item VARCHAR(30),
recipient VARCHAR(30),
location VARCHAR(10),
date VARCHAR(10),
userid INTEGER
);


input some random data into both of the tables.
You will also want to INNER JOIN the tables as well. To do so:

select * from users INNER JOIN expense_tracker ON users.id = 2;

you should see your user row in the results!

4/17/22 UPDATE:

Submitted in User Login and Signup pages UI with React and bootstrap.

Added in a new column in the users table named: lastname
altered column - name to: firstname

To do so:
ALTER TABLE users
ADD COLUMN lastname VARCHAR (30);

ALTER TABLE users
RENAME COLUMN name TO firstname;

To check changes; 
SELECT * FROM users;
