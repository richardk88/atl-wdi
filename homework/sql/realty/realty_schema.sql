DROP TABLE if EXISTS apartments;
DROP TABLE if EXISTS offices;
DROP TABLE if EXISTS storefronts;

CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    apt_num INTEGER,
    bedrooms  SMALLINT,
    bathrooms NUMERIC(1),
    address TEXT NOT NULL,
    tenant VARCHAR(255),
    occupied BOOLEAN,
    sq_ft NUMERIC,
    price MONEY
);

CREATE TABLE office (
    id SERIAL PRIMARY KEY,
    office_num INTEGER,
    floors SMALLINT,
    sq_ft NUMERIC,
    cubicles SMALLINT,
    bathrooms SMALLINT,
    address TEXT NOT NULL,
    name VARCHAR(255),
    occupied BOOLEAN, 
    price MONEY
);

CREATE TABLE storefronts (
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    occupied BOOLEAN, 
    price MONEY, 
    kitchen BOOLEAN DEFAULT FALSE,
    sq_ft NUMERIC,
    owner VARCHAR (255),
    outdoor_seating BOOLEAN DEFAULT FALSE
)