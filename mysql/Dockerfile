FROM mysql:latest

ENV MYSQL_DATABASE=node_db
ENV MYSQL_ROOT_PASSWORD=root

COPY ./dump.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]