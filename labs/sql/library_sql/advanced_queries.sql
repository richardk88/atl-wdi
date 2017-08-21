-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT *
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE UPPER(authors.name) = UPPER('George R.R. Martin');
-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT *
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE UPPER(name) = UPPER('Milan Kundera');
-- Find all books written by an author from China or the UK.
SELECT *
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE nationality IN ('China', 'United Kingdom');
-- Find out how many books Albert Camus wrote.
SELECT COUNT(books.title)
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE name = 'Albert Camus';
-- Find out how many books were written by US authors.
SELECT COUNT(nationality)
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE nationality = 'United States of America';
-- Find all books written after 1930 by authors from Argentina.
SELECT *
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE nationality = 'Argentina' AND books.publication_date > 1930;
-- Find all books written before 1980 by authors not from the US.
SELECT *
FROM authors
JOIN books
ON authors.id = books.author_id
WHERE books.publication_date < 1980 AND nationality NOT IN ('United States of America');
-- Find all authors whose names start with 'J'.
SELECT * FROM authors WHERE name LIKE 'J%';
-- Find all books whose titles contain 'the'.
SELECT * FROM books WHERE title ILIKE '% the %';
-- Find all authors who have written books with that start with the letter 'N'.
SELECT *
FROM authors
LEFT JOIN books
ON authors.id = books.author_id
WHERE title LIKE 'N%';