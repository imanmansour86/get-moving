![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/get-moving)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/get-moving)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/get-moving)

# Get-moving

This app is a social exercise activity app, where users can view other activities added by people and register to these events. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, npm bcrypt package to hash passwords and the express-session npm package for authentication. It also uses Simonwep/pickr. 

## Deployed Link

- [Deployed](https://pacific-wildwood-76799.herokuapp.com/)

## Description

## Table of Contents

  - [Get-moving](#get-moving)
  - [Deployed Link](#deployed-link)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Built With](#built-with)
  - [Resources Used](#resources-used)
  - [Author](#author)
  - [License](#license)

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/get-moving) in github and clone the app
- Open the app in VS code, navigate to .env file, change the DB_USER and DB_PW based on current user configurations
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- From terminal: navigate to db folder in the app's directoty and run:

  ```md
  $ mysql -u root - p
  ```

- Run the schema file:

  ```md
  source schema.sql
  ```

- From terminal: navigate to the app's directoty and run:

  ```md
  $ npm run seed
  ```

- To invoke the app from terminal, run:

  ```md
  $ node server.js
  ```

## Usage

- Homepage

![Homepage](/public/images/homepage.gif)

- Login

![Login](/public/images/login.gif)

- My Activity

![Activity](/public/images/single%20activity.gif)

- Add Activity

![Add Activity](/public/images/add.gif)

- Delete Activity

![Delete Activity](/public/images/delete.gif)

- Attend Activity

![Attend Activity](/public/images/attend.gif)

## Features

When the user first opens the page, a list of activites appear on the page. When click on a single activity, the user is prompted to either sign up or login. After login, the user can see his created activities by creating the Activity tab in the nav bar. The user can also delete activities from his Activity page, or attend an activity on homepage. The homepage shows people signed up for each event, when the users clicks on the button to attend, his name is added to the people coming list. This app also has a fun color changing feature at the bottom of the page. You can click on the white and a color changer pops up. You can then use the color changer to change the background color of the site. 

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express-session](https://www.npmjs.com/package/express-session)
- [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Simonwep/pickr](https://github.com/Simonwep/pickr)

## Resources Used

- [W3schools](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Author

Laura Gupta

- [Github](https://github.com/lauragupta)

Jason Ngo

- [Github](https://github.com/jsncorn)

Iman Mansour

- [Github](https://github.com/imanmansour86)

## License

This project is licensed under the MIT License
