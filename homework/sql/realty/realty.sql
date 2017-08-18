SELECT AVG(sq_ft) FROM offices;

SELECT COUNT(*) FROM apartments;

SELECT * FROM apartments WHERE occupied = false;

SELECT name FROM offices;

SELECT cubicles, bathrooms FROM offices WHERE id=3;

SELECT * from storefronts WHERE kitchen = true;

SELECT owner, sq_ft FROM storefronts ORDER BY sq_ft DESC LIMIT 1;

SELECT name, cubicles FROM offices ORDER BY cubicles ASC LIMIT 1;

SELECT name, cubicles, bathrooms FROM offices ORDER BY cubicles + bathrooms DESC LIMIT 1;
