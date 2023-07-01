# CICD Demo Project

## Brief

This is a demo repository to support a lesson on CICD.

## How to run the project

1. Run `npm i` to install dependency
1. Run `npm run test` to run tests located at `sum.test.js`
1. Run `npm run start` to start the project
1. After project is started, try `http://localhost:8000/sum?n1=4&n2=4` to get a result `{"result":8}`

## How to fail the project

1. Open `sum.test.js` file
1. Change the first test's assertion from `toBe(2)` to `toBe(3)`
1. Run `npm run test` again
