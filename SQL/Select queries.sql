SELECT name, major FROM student;

SELECT student.name, student.major FROM student;

SELECT name, major FROM student ORDER BY name;

SELECT name, major FROM student ORDER BY major;

SELECT name, major FROM student ORDER BY name ASC;

INSERT INTO student VALUES(6, 'Bob', 'Chemistry');

SELECT * FROM student ORDER BY name, rollNo;

SELECT * FROM student LIMIT 3;

SELECT * FROM student WHERE major = 'Chemistry';

SELECT * FROM student WHERE major = 'Chemistry' OR major = 'Biology';

SELECT * FROM student WHERE major <> 'Chemistry';

SELECT * FROM student WHERE rollNo < 4;

SELECT * FROM student WHERE rollNo < 4 AND major = 'English';

SELECT * FROM student WHERE major IN ('English', 'Physics', 'Chemistry');

SELECT * FROM student WHERE major IN ('English', 'Physics') AND rollNo > 2;

