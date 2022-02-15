# NextJs Apollo Boilerplate

Boilerplate for building applications using Next.js and Apollo

<img src="public/assets/images/banner.png" width="100%" alt="Banner">

This boilerplate is made for those who want to start a new project using Apollo, Graphql, Redux, Chakra-ui, Axios, etc., which are often used in real-world projects along with Next.js.

[Demo Site](https://nextjs-apollo-boilerplate-caribjin.vercel.app/)

## Features
* 👌 Authentication via OAuth (Google, Github)
* 🐵 Dark/Light Theme
* 🚗 Responsive Layout
* 🚀 Fetch and display SpaceX launches data via Apollo GraphQL
     [SpaceX GraphQL APIs](https://api.spacex.land/graphql/)
* 🇰🇷 Support for i18n (English/Korean)
* 🛕 Maximize lighthouse score
* 🚣‍♂️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
 
## Teck Stack
- [Next.js](https://nextjs.org)
- [Chakra UI](https://chakra-ui.com/)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [NextAuth](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [SVGR](https://react-svgr.com/)

## Requirements
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Installation
1. Clone the repository:

   ```bash
    git clone git@github.com:caribjin/nextjs-apollo-boilerplate.git
   ```

1. Install dependent packages:

   ```bash
   yarn install
   ```
   
 1. After creating Google OAuth Client from https://console.developers.google.com/apis/credentials/oauthclient, copy `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` and paste them into `env` file in root folder.

 1. After creating GitHub OAuth Client from https://github.com/settings/applications/new, copy `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` and paste them into `env` file in root folder.

## Development mode commands
1. Run the application in development mode.
    ```bash
    yarn dev
    ```
1. Build production.
    ```bash
    yarn build
    ```
1. Run the application in production mode.
    ```bash
    yarn start
    ```


## Deployment

You can deploy your application to [Varcel]((https://vercel.com/signup/)) by clicking the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaribjin%2Fnextjs-apollo-boilerplate&env=GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,NEXTAUTH_URL)


## License

[MIT](https://choosealicense.com/licenses/mit/)

