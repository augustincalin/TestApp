# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.  
It shows how to use a library generated with the `ng generate library` and how to project a custom component (compartment.component.ts) into a component contained in that library.  
The library is here: https://github.com/augustincalin/d4g-truck  
If you want to use `npm link` then you have to:
1. clone the d4g-truck repo
2. run `ng build truck-lib --prod` in that project folder
3. navigate to `dist/lib` folder
4. run `npm link`
5. go back to TestApp and run `npm i`
6. run `npm link truck-lib` (the order is important: first `npm i` and then `npm link...` !)
7. build and serve as usual

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
