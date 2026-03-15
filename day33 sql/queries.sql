-- select only names
select name from students;

select * from students;

-- select only names
select name from students;

-- select name and marks 

select name, marks from students;

-- students with marks greater than 80
select * from students where marks > 80;

-- students from hyderabad
select * from students where city = "Hyderabad";

-- female students
select * from students where gender = "female"

-- male students in class 10
select * from students where gender = "male" AND class = "10";

-- students with marks b.w 70 and 90
select * from students where marks BETWEEN 70 AND 90;

-- students younger than 18
select * from students where age < 18;

-- students not from chennai 
select * from students where city != "Chennai"; 

-- students from bangalore or hyderabad 
select * from students where city IN("Bangalore", "Hyderabad");


-- students with marks above 90
select name, marks from students where marks >90;


-- sort the students by marks(ascending)
select * from students order by marks asc;
select * from students ordery by marks desc;


-- top scoring students first 
select name, marks from students order by marks desc;


-- first 5 students 
select * from students limit 5;

-- top 3 hightest marks 
select * from students order by marks DESC limit 3;

-- students whose name start with "V"
select * from students where name LIKE "V%";


-- total students
select count(*) from students;


-- find the highest marks 
select MAX(marks) from students; 

-- find the lowest marks 
select MIN(marks) from students; 

-- avg marks of the students
select avg(marks) from students; 

-- top scrorer in the school 
select * from students order by marks desc limit 1;

-- lowest scoring student 
select * from students order by marks limit 1;

-- female students with high performance 
select * from students 
where gender = "female" and marks > 80; 


-- male students below avg performance 
select * from students 
where gender = "Male" and marks < 70; 


-- students of class 9 section A
select * from students where class = "9" AND section = "A"; 

-- students scoring b/w 60 and 80 (avg) 
select * from students where marks BETWEEN 60 And 80;


-- top 5 rank holders 
select name, marks from students 
order by by marks DESC 
LIMIT 5; 


-- DISTNICT(REMOVE DUPLICATES) 
-- unqiue cities where students live
select DISTINCT city from students; 


-- unique classes in school 
select DISTINCT class from students; 




-- -- update the marks of a student

update students set marks = 100 where student_rollnumber = 1;
select * from students;

-- -- change the city of the student

update students set city = "HYD" where name = "Priya";
select * from students;


-- -- update multiple columns
update students set class = "10", section = "A" where student_rollnumber = 2;

select * from students


-- -- increase 5 marks for all the students 
update students set marks = marks + 5; 


-- -- update the students who scored below 35
update students set marks = 42 where marks < 35; 



-- add the new column
Alter table students ADD email varchar(50);
select * from students;

-- add new column with default
ALTER TABLE students ADD status_student varchar(20) default "ACTIVE";
select * from students;





-- DROP THE COLUMN
ALTER TABLE students DROP COLUMN age;
SELECT * FROM students;


DELETE from students where student_rollnumber = 8;
select * from students;



DELETE from students where city = "Delhi";
select * from students;




-- total students in each class

-- select class, count(*)as total_students 
-- from students group by class;


-- -- students count per city
-- select city, count(*) as total_students
-- from students group by city;

-- -- male and famale count
-- select gender, count(*) as total from students group by gender;



-- offset is used to skip the rows
-- i wanted to find students from 4 to 7, 4
select * from students order by student_rollnumber limit 4 offset 3;




