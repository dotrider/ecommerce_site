INSERT INTO users
(email, password)
VALUES
($1, $2);

SELECT email, user_id FROM users
WHERE email = $1;
