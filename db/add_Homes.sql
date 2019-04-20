INSERT INTO home
    (name, address, city, state, zip, img, contact)
VALUES($1, $2, $3, $4, $5, $6, $7);

SELECT *
FROM home;