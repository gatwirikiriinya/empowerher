# Empower Her Backend

This is a RESTful API built with Node.js and PostgreSQL.

## Getting Started

1. Clone this repository by running the following command in your terminal at the project root.

```
git clone https://github.com/gatwirikiriinya/empowerher
```

2. Ensure you have Node and NPM install on your computer. For this project, I used Node version 18.15.0 and NPM version 9.6.3

3. Navigate to the `backend` directory and run the following command to install the required dependencies

```
npm install
```

4. Rename the `.env.example` to `.env` and replace the values in angle brackets with your own values.

5. Ensure that you have either `Docker Desktop` installed on your machine or a local instance of `PostgreSQL` installed.

6. If you're using `Docker`, there is a `docker-compose.yml` file available at the project root. Run the following command to start the docker instance:

```
docker-compose up
```

You can then proceed to login with the following command:

```
psql -U empowerher empowerher_db
```

7. If you're using a local instance of `PostgreSQL`, first check if the service is running either from the services window or by running the following command:

```
systemctl status postgresql
```

8. To create the database, run the migration:

```
npm run up
```

9. To run the tests, run the following command:

```
npm run test
```

10. To start the server, run the following command:

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



