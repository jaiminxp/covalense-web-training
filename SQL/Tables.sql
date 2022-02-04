DROP TABLE student;

CREATE TABLE student(
    rollNo INT,
    name VARCHAR(20),
    major VARCHAR(20),
    PRIMARY KEY(rollNo)
);

DESCRIBE student;

ALTER TABLE student ADD gpa DECIMAL(3, 2);

ALTER TABLE student DROP COLUMN gpa;

