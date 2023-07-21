# Empower Her

A transformative platform empowering young African women with financial education, investment opportunities, and a supportive community for achieving financial independence.

## Problem Statement

A significant gender wealth gap exists in Africa, limiting opportunities for women to achieve financial independence. Many young African women face challenges accessing financial education, investment opportunities, and mentorship, preventing them from fully participating in the economy and realizing their financial potential.

## The Proposed Solution

EmpowerHer Africa provides a comprehensive solution to address these challenges. By offering educational resources, investment opportunities, and a supportive community, the platform aims to empower African women with the tools and knowledge they need to take control of their financial future.

![image](https://github.com/gatwirikiriinya/empowerher/assets/106272752/101acbdd-8c13-4485-acdc-47f6f1379c6c)

![image](https://github.com/gatwirikiriinya/empowerher/assets/106272752/669c1816-e0bd-4ecf-b87c-0585d002f36a)

## Live link
Visit the application on .

## Getting Started

1. Clone this repository by running the following command in your terminal at the project root.

```
git clone https://github.com/gatwirikiriinya/empowerher
```

2. Ensure you have Node and NPM install on your computer. For this project, I used Node version 18.15.0 and NPM version 9.6.3


# Empower Her Frontend:

- Navigate into the frontend folder
- npm i to install all the required pakages
- npm start to start development server 


# Empower Her Backend

This is a RESTful API built with Node.js and PostgreSQL.


1. Navigate to the `backend` directory and run the following command to install the required dependencies

```
npm install
```

2. Rename the `.env.example` to `.env` and replace the values in angle brackets with your own values.

3. Ensure that you have either `Docker Desktop` installed on your machine or a local instance of `PostgreSQL` installed.

4. If you're using `Docker`, there is a `docker-compose.yml` file available at the project root. Run the following command to start the docker instance:

```
docker-compose up
```

You can then proceed to login with the following command:

```
psql -U empowerher empowerher_db
```

5. If you're using a local instance of `PostgreSQL`, first check if the service is running either from the services window or by running the following command:

```
systemctl status postgresql
```

6. To create the database, run the migration:

```
npm run up
```

7. To run the tests, run the following command:

```
npm run test
```

8. To start the server, run the following command:

```
npm run serve
```

## Endpoints

### Users Endpoints

| Endpoint           | Verb   | Auth? | Description                  |
| ------------------ | ------ | :---: | ---------------------------- |
| /api/users/        | POST   |  ❌   | Create a new user            |
| /api/users/        | GET    |  ✔️   | Get all the users            |
| /api/users/:id     | GET    |  ✔️   | Get a specific user by id    |
| /api/users/sign-in | POST   |  ❌   | Authenticate a user          |
| /api/users/:id     | PUT    |  ✔️   | Update a specific user by id |
| /api/users/:id     | DELETE |  ✔️   | Delete a specific user by id |



