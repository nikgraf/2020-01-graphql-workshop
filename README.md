## Install

Have Node 14 or higher installed. Node 12 might also work …

```sh
cd client && yarn && cd ..
cd server && yarn && cd ..
yarn
```

## Dev

```sh
yarn dev
```

Server GraphQL Type generation

```sh
## NOTE: --watch mode didn't work for me
cd server && yarn generate:graphql-types --watch
```

Client GraphQL Type generation

```sh
cd client && yarn generate:graphql-types --watch
```

## GraphiQL

```sh
http://localhost:3000/graphql
# or directly at http://localhost:5000/graphql
```

## Setup Heroku Deployment

Install the Heroku CLI and log in using `heroku login`

```sh
heroku create
```

## Deploy

```sh
git push heroku master
```

Heroku will automatically invoke `yarn build` and once finished invoke `yarn start`

More info here: https://devcenter.heroku.com/articles/creating-apps & https://devcenter.heroku.com/articles/git
