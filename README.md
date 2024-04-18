# WebdriverIO Framework

WebdriverIO framework built with typescript

## Installation

Install Node.js version 20 with
`nvm use 20`

`Run npm install`

Install appium with `npm i -g appium`

Install uiautomator2 with `appium driver install uiautomator2` (https://appium.io/docs/en/2.5/ecosystem/drivers/)

Create an Android emulator that will match the capabilities in the config file wdio.conf.ts

Run tests with `npm run wdio`

## If Needed
Use the package manager brew (for macos, use other to work with other so) and install:
- Typescript
- Node
- Npm
- Mocha
- Ts-node
- Webdriverio

This is the runner and can be changed in package.json
typescript
"scripts": {
"wdio": "wdio run ./wdio.conf.ts"
}