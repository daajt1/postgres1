### Crear database en postgres sql
 ~~~
 create database dlibrary
 ~~~
 
 > Se crea una base de datos en postgres con el comando create database nombre_basededatos
 
 ~~~
 \c dlibrary
 ~~~
 
 > Conectarse a la base de datos creada

> Crear una tabla

~~~
create table dmuestra(
    id varchar,
    nombre text,
    autor text,
    fecha date 
);
~~~
>introducir datos a tabla de muestra

~~~
insert into dmuestra values(
  1,'muestra1','daniel','28-09-20'
);
~~~

create table users (
    username text,
    password text
);

insert into users values (
 ('user1','3241'),
 ('user2','2322'));