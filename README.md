## Project_2 - Storefront Backend API - Udacity Fullstack JavaScript Nanodegree ##

## Introduction ##
This is a REST API for an e-commerce website backend based on three models: Products, Orders and Users. 
The API provides a number of endpoints for CRUD and custom operations to retrieve and modify database data. 
The API endpoints and methods created as well as the specific requirements for sending requests to each endpoint, data shapes, and database design are described in the `REQUIREMENTS.md` file (https://github.com/fedeval/storefront-backend-api/blob/main/REQUIREMENTS.md).

---
## Project Setup ##

### Database configuration ###
The Storefront Backend API connects to a postgres database. To use this API, create two databases (development and test) on your local machine. 
Run the command `psql postgres` in terminal to open the postgres CLI. 
Then run the following SQL commands:

```SQL
CREATE USER developer WITH PASSWORD 'YOUR_PASSWORD_HERE';
CREATE DATABASE storefront;
\c storefront;
GRANT ALL PRIVILEGES ON DATABASE storefront TO developer;
CREATE DATABASE storefront_test_db;
\c storefront_test_db;
GRANT ALL PRIVILEGES ON DATABASE storefront_test_db TO developer;
````

It is important to create a `database.json` file with the following format in order to ensure that the API can connect to the database.

```json
{
  "dev": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "storefront",
    "user": "developer",
    "password": 'YOUR_PASSWORD_HERE'
  },
  "test": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "storefront_test_db",
    "user": "developer",
    "password": 'YOUR_PASSWORD_HERE'
  }
}
```

**IMPORTANT NOTE: `database.json` should be added to a `.gitignore` file in order to keep your password hidden.**


### Environment variables ###
Several environment variables are necessary for the API to work. The `dotenv` package is already included in the `package.json`file, so it is necessary to create a `.env` file with the following variables:

| Name              | Value            | Notes         |
| ------------------|:----------------:|:-------------:|
| POSTGRES_HOST     | 127.0.0.1        | Same value as in the database.json file |
| POSTGRES_DB       | storefront       | Same value as in the database.json file |   
| POSTGRES_TEST_DB  | storefront_test_db  | Same value as in the database.json file |
| POSTGRES_USER     | developer        | Same value as in the database.json file |
| POSTGRES_PASSWORD | YOUR_PASSWORD    | Same value as in the database.json file |
| ENV               | dev              | Used to set the DB environment. The test script automatically sets it to 'test' when runnning.|
| SALT_ROUNDS       | 10               | Number of salt rounds the password hashing function of the bcrypt package will be using|
| BCRYPT_PASSWORD   | YOUR_STRING_HERE | A string of your choice that bcrypt will be adding prior to hashing passwords for an extra layer of security |
| TOKEN_SECRET      | YOUR_STRING_HERE | A string that will be used by jwt to generate authentication tokens. The more complex the better, it should be made of random characters ideally. |

**IMPORTANT NOTE: `.env` should be added to `.gitignore` file and never committed to a public repo.**

---
## Getting Started ##

### Installing dependencies ###
After cloning the repo, all the project dependencies can be installed using npm:
```
npm install
```

### Running the server ###
To execute the API code use the following command in terminal:
```
npm run start
```
The API will then be available on port 3000 by default or at the PORT set in the .env file.

### Scripts ###
The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript ####
```
npm run build
```
The transpiled code will be available in the `/dist` folder. The transpiling option and configuration can be changed by editing the `tsconfig.json` file.

#### Testing ####
A set of jasmine testing suites and specs can be used to test both the endpoints as well as the models. 
```
npm run test
```
This script runs migrations and tests on the test database by setting the ENV variable to `test` using the `cross-env` package. The script relies on two "child scripts" `npm run jasmine`and `npm run migrate-and-jasmine`. Those script have been broken up for readability but they should never be run. 

#### Formatting ####
The code can be automatically formatted using prettier. The formatting options can be customised by editing the `.prettierrc`file.
```
npm run prettier
```

#### Linting ####
The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the `.eslintrc` file.
```
npm run lint
```

#### Watcher ####
This will kick off the watcher library and start running the application on the port specified in `server.ts` or the `.env`file.
```
npm run watch
```
