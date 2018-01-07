# hos-api
API for the consequential party game enhancer - hat of shame

## Setup
1. Install dependencies
```
npm install
```
2. Make sure [postgresql](https://www.postgresql.org/download/) is installed
3. Make sure your have the database created locally
```shell
createdb hos_development
createdb hos_test
```
4. Run migrations and seed initial data
```shell
npm run migrate
npm run seed
```
5. Run server
```shell
npm run dev
```

## Schema
```
user
  id
  email - not null
  first name - not null
  last name - not null
  avatar
  age - not null - unsigned
  consequences


consequence
  id
  description
  category
  user


category
  id
  title
```
