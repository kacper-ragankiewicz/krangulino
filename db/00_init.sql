CREATE TABLE public.users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    UNIQUE (email) 
)TABLESPACE pg_default;

ALTER TABLE public.users OWNER TO hero;

INSERT INTO public.users (name,email,password) VALUES ('Conor', 'conor@gmail.com', 'password');

-------------TEST

-- CREATE TABLE shark(
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL,
-- color VARCHAR(50) NOT NULL);

-- ALTER TABLE shark OWNER TO hero;