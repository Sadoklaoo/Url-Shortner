# Url-Shortner Backend Challenge

In this challenge, we will create a URL Shortener API which can create and retrieve data from MongoDB.

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Online Database](#online-database)
  - [Pre-reqs](#Prerequisites)
  - [Create a managed MongoDB with Atlas](#create-a-managed-mongoDB-with-atlas)
- [Build the app](#build-the-app)
- [ESLint](#eslint)
- [Dependencies](#dependencies)
  - [`dependencies`](#dependencies)
  - [`devDependencies`](#devdependencies)

# Pre-reqs

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

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

# build and run
npm run build

# run dev mode
npm start
```

# Online Database

For local development, running MongoDB on localhost is fine, however we can use a database with high availability.

## Prerequisites

- **Create a cloud database** -
  The easiest way to achieve this is by using a managed cloud database.
  There are many different providers, but the easiest one to get started with is [MongoDB Atlas](#create-a-managed-mongodb-with-atlas).

### Create a managed MongoDB with Atlas

1. Navigate to [MongoDB's website](https://www.mongodb.com/cloud/atlas), sign up for a free account, and then log in.
2. After creating the account, enter the organization name, project name, and select your preferred language (JavaScript).
3. Select the **Shared Cluster** to get a free version with up to 512 MB storage which is great for development purposes.
4. On the "Create a Starter Cluster" page you can select cloud provider, region, region, cluster tier, and
   MongoDB settings, like version and backup frequency (Note: there is no option to create backups in the free tier).
5. If you already know to which cloud provider and region you want to deploy later, you should select the same here for best performance. Otherwise select a region close to the location where you plan to deploy the application later.
6. Select **M0 Sandbox** as the Cluster Tier, give your cluster a name, and then click the "Create Cluster" button.
7. It will now take a couple of minutes to create the cluster and you will be redirected to the MongoDB Atlas Admin interface.
8. Now you must configure access and security before you can use the database.
9. To whitelist an IP address, go to the **Network Access** section and click the "Add IP Address" button. For local development you can select your current IP address.
10. Create a user by selecting the **Add New Database User** in Database Access, adding a username and password (Password Authentication method) and give him read and write access to any database within the cluster.
    A user account is required to connect to the database, so remember these values because you will need them as part of your connection string.
11. Within the Clusters section, click the **Connect** button in your cluster to connect to the database.
12. You could now connect to the cluster using [MongoDB Compass](https://www.mongodb.com/products/compass), which is a graphical interface (GUI) to interact with the database.
13. But we need to select **Connect your application** to get the connection string, it should look like this: `mongodb+srv://<username>:<password>@your-cluster.12abc.mongodb.net/your-database?retryWrites=true&w=majority`
    and replace `<username>` and `<password>` with the credentials you just created.
    Back in your project, open your `.env` file and update file with your new connection strings. > NOTE! - If you don't have an `.env` file yet, rename `.env.example` to `.env` and follow the comments to update the values in that file.
14. **Success!**
    You can test that it works locally by removing `MONGO_URI`.
    After rebuilding/serving, the app should work, but users that were previously created in local testing will not exist in the new database!

You can find **more information** about how to get started with Atlas [here](https://docs.atlas.mongodb.com/getting-started/).

### Build the app

Building the app locally is required to generate a zip to deploy because the App Service won't execute build tasks.
Build the app however you normally would:

- `ctrl + shift + b` - kicks off default build in VS Code
- execute `npm run build` from a terminal window

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

| Package     | Description                                              |
| ----------- | -------------------------------------------------------- |
| async       | Utility library that provides asynchronous control flow. |
| bcrypt      | Library for hashing and salting user passwords.          |
| body-parser | Express 4 middleware.                                    |
| dotenv      | Loads environment variables from .env file.              |
| express     | Node.js web framework.                                   |
| mongoose    | MongoDB ODM.                                             |
| http        | Simplified HTTP request library.                         |
| shortid     | Creates amazingly short non-sequential unique ids.       |
| ts-node-dev | TypeScript execution engine and REPL for Node.js.        |

## `devDependencies`

| Package    | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| @types     | Dependencies in this folder are `.d.ts` files used to provide types    |
| ts-node    | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| eslint     | Linter for JavaScript and TypeScript files                             |
| typescript | JavaScript compiler/type checker that boosts JavaScript productivity   |

To install or update these dependencies you can use `npm install` or `npm update`.
