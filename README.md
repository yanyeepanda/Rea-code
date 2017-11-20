# Rea-code

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.


## Run the app

- Setup
  1. NodeJS (6.9+ recommended)
  2. Angular CLI (RC2 or later)
  ```
  npm install -g @angular/cli
  ```
- Start server

  go to /code-test , run
  ```
  ng serve
  ```
  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Running unit tests

  ```
  ng test
  ```
  Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


- Code scaffolding

  Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

- Build

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


  To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Main Components

  - mock-service.service

    service to get mock data, will be called in app.component

  - app.component

    main app, call mock-service to get data, including params and functions to generate web page

## Bootstrap Library

  Bootstrap 3.3 is also used for helping some styles. For more details please check: [Bootstrap Documents](https://getbootstrap.com/docs/3.3/).
