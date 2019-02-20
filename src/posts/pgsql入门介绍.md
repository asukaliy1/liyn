---
title: "pgsql入门介绍"
date: "2019-02-20"
tag: "数据库"
link: "201902202"
createdate: "2019-02-20"
updatedate: "2019-02-20"
---

## 1. schema（模式）
A database contains one or more named schemas, which in turn contain tables. Schemas also contain other kinds of named objects, including data types, functions, and operators.
The same object name can be used in different schemas without conflict; for example, both schema1 and myschema can contain tables named mytable. 
Unlike databases, schemas are not rigidly separated: a user can access objects in any of the schemas in the database they are connected to, if they have privileges to do so.

#### why to use
- To allow many users to use one database without interfering with each other.
- To organize database objects into logical groups to make them more manageable.
- Third-party applications can be put into separate schemas so they do not collide with the names of other objects.


## 2.Tablespaces
Tablespaces in PostgreSQL allow database administrators to define locations in the file system where the files representing database objects can be stored. Once created, a tablespace can be referred to by name when creating database objects.

```sql
//To define a tablespace, use the CREATE TABLESPACE command, for example::
CREATE TABLESPACE fastspace LOCATION '/ssd1/postgresql/data';

```

## 3.Datatypes

### Numeric Types

| name     | Storage Size |                      Description |                                                                                    Range |
| -------- | :----------: | -------------------------------: | ---------------------------------------------------------------------------------------: |
| smallint |   2 bytes    |              small-range integer |                                                                         -32768 to +32767 |
| integer  |   4 bytes    |       typical choice for integer |                                                               -2147483648 to +2147483647 |
| bigint   |   8 bytes    |              large-range integer |                                             -9223372036854775808 to +9223372036854775807 |
| decimal  |   variable   | user-specified precision,  exact | up to 131072 digits before the decimal point; up to 16383 digits after the decimal point |
| numeric  |   variable   |  user-specified precision, exact | up to 131072 digits before the decimal point; up to 16383 digits after the decimal point |

### Character Types
- character varying(n) 
- character(n)

values of type character will be space-padded; values of type character varying will simply store the shorter string.