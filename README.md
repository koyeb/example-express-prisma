[![example-express-prisma](https://github.com/koyeb/example-express-prisma/actions/workflows/deploy.yaml/badge.svg)](https://github.com/koyeb/example-express-prisma/actions)

<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy a Node Express application using Prisma application on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the Express application using Prisma example application

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.
This repository contains a Node Express application using Prisma you can deploy on the Koyeb serverless platform for testing.

This example application is designed to show how a Node Express application using Prisma can be deployed on Koyeb.

## Getting Started

Follow the steps below to deploy and run the Node Express application using Prisma on your Koyeb account.

### Requirements

You need a Koyeb account to successfully deploy and run this application. If you don't already have an account, you can sign-up for free [here](https://app.koyeb.com/auth/signup).

### On your machine

#### Create and seed the database
Run the following command to create the database. This also creates the Planet table that is defined in `prisma/schema.prisma`:

```
DATABASE_URL="postgres://..." npx prisma migrate dev --name init
DATABASE_URL="postgres://..." npx prisma db seed
```

### Deploy using the Koyeb button

The fastest way to deploy the Node Express application using Prisma is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=main&type=git&repository=koyeb%2Fexample-express-prisma&branch=main&builder=buildpack&build_command=npm+run+postgres%3Ainit&instance_type=nano&env%5BDATABASE_URL%5D=CHANGE_ME&ports=3000%3Bhttp%3B%2F)

Clicking on this button brings you to the Koyeb App creation page with everything pre-set to launch this application.  Modify the value of the `DATABASE_URL` environment variable to your database connection string before deploying.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

### Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.
Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](//app.koyeb.com/apps), on the **Overview** tab, click the **Create Web Service** button to begin.

1. Select `GitHub` as the deployment method.
2. In the repositories list, select the repository you just forked.
3. Expand the **Builder** section.  Click the **override** toggle associated with the **Build command** field and enter the command needed to initialize your database backend (`npm run postgres:init` *or* `npm run mysql:init` *or* `npm run mongodb:init` *or* `npm run cockroachdb:init`) in the field.
4. Expand the **Environment variables** section.  Click **Add variable** and set `DATABASE_URL` to the connection string for your database.
5. Choose a name for your App, i.e `express-prisma-on-koyeb`, and click **Deploy**.

You land on the deployment page where you can follow the build of your Node Express application using Prisma. Once the build is completed, your application is being deployed and you will be able to access it via `<YOUR_APP_NAME>-<YOUR_ORG_NAME>.koyeb.app`.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](//github.com/koyeb/example-express-prisma/issues) or fork this repository and open a [pull request](//github.com/koyeb/example-express-prisma/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)
