DROP TABLE student;

CREATE TABLE student(
    rollNo INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20) DEFAULT 'undecided',
    score INT DEFAULT 0,
    PRIMARY KEY(rollNo)
);

INSERT INTO student(name, major) VALUES('Tom', 'Chemistry');
INSERT INTO student(name, major) VALUES('Jenny', 'Biology');

SELECT * FROM student;