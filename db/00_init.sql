CREATE TABLE public.usr (
    user_id SERIAL NOT NULL,
    user_email text NOT NULL,
    user_pass text NOT NULL,
    user_name text NOT NULL,
    user_lastname text NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (user_id)
) WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.usr OWNER TO hero;

-------------TEST

CREATE TABLE shark(
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
color VARCHAR(50) NOT NULL);

ALTER TABLE shark OWNER TO hero;