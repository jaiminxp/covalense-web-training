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

SELECT * FROM student;

UPDATE student SET major = 'Bio' WHERE major = 'Biology';

UPDATE student SET major = 'Comp Sci' WHERE rollNo = 4;

UPDATE student SET major = 'Computer' WHERE major = 'English' OR major = 'Comp Sci';

UPDATE student SET major = 'Chemistry', name = 'Hannah' WHERE major = 'Computer';

UPDATE student SET major = 'undecided';