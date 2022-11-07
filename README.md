# tech-challenge-sb-facto

The purpose of this project is to demonstrate running automated tests against an online factorial calculator

## Requirements:

- NodeJS Version >= 16.13.2
- npm version >= 8.1.2
- Java SDK (v1.8 or higher) - for allure reporting

## Technologies & Dependencies Used:

- NodeJS
- Typescript
- WebdriverIO
- Allure Reporting
- rimraf (npm package equivalent to rm -rf)
- Prettier (for formatting)

## Recommended IDE

- Visual Studio Code
  - VSCode Extension settings and suggestions included

## nvm usage

If you are using nvm to manage node versions. You may use the following command to install the node version specified for this project:
`nvm install`

## Installation Instructions

1. Clone the repository
2. Change directory to cloned repository: `cd calc-tests`
3. Run the following command:
   - `npm ci` - to use same dependency (and nested dependencies) version/s as per package-lock.json
   - `npm i` - to override versions as per your node version _(Disclaimer: may install versions of dependencies not intended for use with this repository)_

## To run all the tests:

`npm run wdio`

## To run tests limited to a set of tags:

`npm run wdio-tagged "@Regression"`

- where: "@Regression" are the set of tags you would like to run

## To run allure report:

`npm run open-allure`

## To remove all allure reporting artifacts:

`npm run remove-all-allure`

## To check if any files require better formatting (via Prettier):

`npm run prettier-check`

## To apply prettier changes directly:

`npm run prettier-apply`
