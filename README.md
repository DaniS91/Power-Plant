# Project Name

#### By Dani Steely

#### _Short description_

## Technologies Used
* _TDD_
* _HTML_
* _Javascript_
* _Jest_
* _Babel_
* _ESLint_

## Setup/Installation Requirements

* clone project from github

* you will need to install all packages using command:
```
$ npm install
```

* the packages included are listed in the file named package.json

* you will need to build the project using command:
```
 $ npm run build
 ```

* project is setup to lint js files using command:
```
$ npm run lint
```

* project is setup to test js files using command: 
```
$ npm run test
```

* you can see these setup scripts in the package.json file under scripts

## Project Description

This application is a self-contained project developed as part of [Epicodus][Epicodus] coursework in [C# with .Net][C# course main]. It was completed following the ["Authentication with Identity"][C# chapter] module in the curriculum. The application utilizes the capabilities of ASP.NET Core MVC framework for routing and handling user requests, along with Entity Framework Core for communicating with a MySQL database through .NET objects. It can store and retrieve data related to products and categories of a fictitious bakery, and supports user account functionalities such as registration, login, and management. The project showcases proficiency in implementing many-to-many relationships in MySQL databases and integrating ASP.NET Identity Core for managing user authentication and authorization.

## Objectives
* Does at least one of your classes have all CRUD methods implemented in your app?
* Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the other class that are related to it?
* Are users able to register, log in and log out with Identity?
* Is Create, Update and Delete functionality limited to authenticated users?
* Build files and sensitive information are included in .gitignore file and is not to be tracked by Git, and includes instructions on how to create the appsettings.json and set up the project.
* There should be a many-to-many relationship between Engineers and Machines.
* The factory manager should be able to add a list of engineers, a list of machines, and specify which engineers are licensed to repair which machines.

## Known Bugs
* No known bugs

## Image Attribution
Please click links for attribution information

[Solar System gif](https://commons.wikimedia.org/wiki/File:Heliocentic_solar_system.gif)

[Spinning Earth gif](https://commons.wikimedia.org/wiki/File:Earth%27s_Axis.gif)

## License

_MIT License_

Copyright (c) _4/8/23_ _Dani Steely_

[Epicodus]: https://www.epicodus.com/
[C# course main]: https://www.learnhowtoprogram.com/c-and-net-part-time
[C# chapter]: https://www.learnhowtoprogram.com/c-and-net-part-time/authentication-with-identity
[Code-First Dev]: https://www.learnhowtoprogram.com/c-and-net-part-time/many-to-many-relationships/code-first-development-and-migrations
