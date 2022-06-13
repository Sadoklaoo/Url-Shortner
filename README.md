# Url-Shortner Backend Challenge

In this challenge, we will create a URL Shortener API using NodeJS, Express which will allow user to create an account and login as well as shorten URLs and using it to redirect. All data will be stored in a MongoDB.   

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Build the app with Docker](#build-the-app-with-docker)
- [ESLint](#eslint)
- [Dependencies](#dependencies)
  - [`dependencies`](#dependencies)
  - [`devDependencies`](#devdependencies)
- [Future Tasks](#future-tasks)

# Pre-reqs

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [Docker](https://www.docker.com/get-started/)

# Getting started

- Clone the repository

```
git clone --depth=1 https://github.com/Sadoklaoo/Url-Shortner.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Configure your mongoDB server

```bash
# create the db directory
sudo mkdir -p /data/db
# give the db correct read/write permissions
sudo chmod 777 /data/db

# starting from macOS 10.15 even the admin cannot create directory at root
# so lets create the db directory under the home directory.
mkdir -p ~/data/db
# user account has automatically read and write permissions for ~/data/db.
```

- Start your mongoDB server (you'll probably want another command prompt)

```bash
mongod

# on macOS 10.15 or above the db directory is under home directory
mongod --dbpath ~/data/db
```

- Build and run the project

```

# build 
npm run build

# run dev mode
npm run dev
```



# Build the app with Docker

To be able to build the app using Docker just use the following commands after cloning the project:

```bash

docker-compose build 

docker-compose run 

```

# Testing
For this project, I chose [Jest](https://facebook.github.io/jest/) as our test framework.
While Mocha is probably more common, Mocha seems to be looking for a new maintainer and setting up TypeScript testing in Jest is wicked simple.

## Install the components
To add TypeScript + Jest support, first install a few npm packages:
```
npm install -D jest ts-jest
```
`jest` is the testing framework itself, and `ts-jest` is just a simple function to make running TypeScript tests a little easier.

## Running tests
Simply run `npm run test`.
Note this will also generate a coverage report.

# ESLint

ESLint is a code linter which mainly helps catch quickly minor code quality and style issues.

## ESLint rules

Like most linters, ESLint has a wide set of configurable rules as well as support for custom rule sets.
All rules are configured through `.eslintrc` configuration file.
In this project, we are using a fairly basic set of rules with no additional custom rules.

## Running ESLint

Like the rest of our build steps, we use npm scripts to invoke ESLint.
To run ESLint you can call the main build script or just the ESLint task.

```
npm run build   // runs full build including ESLint
npm run lint    // runs only ESLint
```

Notice that ESLint is not a part of the main watch task.

If you are interested in seeing ESLint feedback as soon as possible, I strongly recommend the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

# Dependencies

Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package       | Description                                              |
| ------------- | -------------------------------------------------------- |
| async         | Utility library that provides asynchronous control flow. |
| bcrypt        | Library for hashing and salting user passwords.          |
| body-parser   | Express 4 middleware.                                    |
| dotenv        | Loads environment variables from .env file.              |
| express       | Node.js web framework.                                   |
| mongoose      | MongoDB ODM.                                             |
| connect-mongo | MongoDB session store for Express and Connect.           |
| http          | Simplified HTTP request library.                         |
| shortid       | Creates amazingly short non-sequential unique ids.       |
| ts-node-dev   | TypeScript execution engine and REPL for Node.js.        |

## `devDependencies`

| Package              | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| @types               | Dependencies in this folder are `.d.ts` files used to provide types    |
| ts-node              | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| eslint               | Linter for JavaScript and TypeScript files                             |
| eslint-config-google | ESLint shareable config for the Google style.                          |
| typescript           | JavaScript compiler/type checker that boosts JavaScript productivity   |
| jest                 | Complete and ready to set-up JavaScript testing solution.              |
| ts-jest              | ts-jest can be used to test TypeScript code.                           |

To install or update these dependencies you can use `npm install` or `npm update`.

# Future Tasks
For the next update I will cover :
- JWT Authentication to cover routes accessibility.
- Email Regex Validation.
- Redirect and Login Test Validation.


