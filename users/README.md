# Users Microservice

## :information_source: What is it about?
This part of the challenge is related to the whole structure of user microservice, including the model and communication with the database.
The routes are protected via JWT.

## 🛠 Technologies

Main used tools:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [NestJS][nestjs]
- [Prisma][prisma]
- [Jest][jests]

### 🎲 How to start the application:

```bash
# Clone this repo
$ git clone https://github.com/LBWKH/ilia-nodejs-challenge

# Access the users folder
$ cd users

# Install dependencies
$ npm install

# Create a .env file and include the following variables
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5440/users?schema=public"
JWT_SECRET= >add the key provided for the challenge here<

# Run Docker to get the database running
$ docker-compose up

# Start the application in dev mode
$ npm run start:dev

# The server will run on port:3002 - access http://localhost:3002

# To use users routes, first create a user through the POST in user route but wihtout the @UseGuard tag. Then use POST in auth route using the created credential
```

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[nestjs]: https://nestjs.com/
[prisma]: https://www.prisma.io/
[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[vscode]: https://code.visualstudio.com/
