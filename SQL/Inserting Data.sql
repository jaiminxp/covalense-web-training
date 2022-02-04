CREATE TABLE student(
    rollNo INT,
    name VARCHAR(20),
    major VARCHAR(20),
    PRIMARY KEY(rollNo)
);

INSERT INTO student VALUES(1, 'Alice', 'English');

INSERT INTO student VALUES(3, 'Alex', 'Physics');
INSERT INTO student VALUES(4, 'Tom', 'Biology');
INSERT INTO student VALUES(5, 'Esha', 'Chemistry');

INSERT INTO student(rollNo, name) VALUES(2, "Bob");

SELECT * FROM student; 
-- grab all data
