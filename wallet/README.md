# Wallet Microservice

## :information_source: What is it about?
This part of the challenge is related to the whole structure of wallet microservice, which includes transactions and balance regarding the transactions in the database, including the model and communication with the database. The routes are protected via JWT.

## 🛠 Technologies

Main used tools:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [NestJS][nestjs]
- [Prisma][prisma]
- [Jest][jest]

### 🎲 How to start the application:

```bash
# Clone this repo
$ git clone https://github.com/LBWKH/ilia-nodejs-challenge

# Access the users folder
$ cd wallet

# Install dependencies
$ npm install

# Create a .env file and include the following variables
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5436/wallet?schema=public"
JWT_SECRET= >add the key provided for the challenge here<

# Run Docker to get the database running
$ docker-compose up

# Start the application in dev mode
$ npm run start:dev

# The server will run on port:3001 - access http://localhost:3001

# To use transactions and balance routes, first POST in auth route, retrieve de token and add it to the routes, the credentials can be found in auth.services file

```

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[nestjs]: https://nestjs.com/
[prisma]: https://www.prisma.io/
[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[vscode]: https://code.visualstudio.com/
