#!/bin/bash

export PGPASSWORD=postgres

psql -U postgres -c "select pg_terminate_backend(pid) from pg_stat_activity where datname='fryx';"
psql -U postgres -c "DROP DATABASE IF EXISTS fryx;"
psql -U postgres -c "CREATE DATABASE fryx WITH OWNER = hero ENCODING = 'UTF8' CONNECTION LIMIT = -1;"

for i in `ls *.sql | sort -g`; do
    echo "importing $i...";
    psql -U postgres fryx < "$i"
done