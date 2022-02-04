DROP TABLE student;

CREATE TABLE student(
    rollNo INT AUTO_INCREMENT,
    name VARCHAR(20),
    major VARCHAR(20) DEFAULT 'undecided',
    score INT DEFAULT 0,
    PRIMARY KEY(rollNo)
);

INSERT INTO student(name, major) VALUES('Alice', 'English');
INSERT INTO student(name, major) VALUES('Bob', 'Biology');
INSERT INTO student(name, major) VALUES('Alex', 'Chemistry');
INSERT INTO student(name, major) VALUES('Triss', 'Computer');
INSERT INTO student(name, major) VALUES('Zenith', 'Biology');
INSERT INTO student(name, major) VALUES('Zenith', 'Chemitry');

SELECT * FROM student;

DELETE FROM student WHERE name = 'Bob';
DELETE FROM student WHERE name = 'Zenith' AND major = 'Biology';
DELETE FROM student WHERE name = 'Zenith';