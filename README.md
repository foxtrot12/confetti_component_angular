# Confetti

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

This project provides a convenient way to add confetti to any angular project. It is ready to go and only needs to be called in html and given required inputs. You can easily control the following:
1. Colors of confetti 
2. Size of confetti
3. Total area of confetti
4. Number of times confetti is to be burst
5. Spread of confetti
6. Duration of confetti
7. If confetti is to be spread immediately after rendering

The component can either be placed at a requisite spot in html of just be given a target id where it will place itself.

Here is an example of input object : 

fakeInputs = {
    COLORS: [
      '#FF0000', // Red
      '#FFA500', // Orange
      '#FFFF00', // Yellow
      '#00FF00', // Lime
      '#00FFFF', // Cyan
      '#0000FF', // Blue
      '#FF00FF', // Magenta
      '#FF1493', // Deep Pink
      '#FF8C00', // Dark Orange
      '#FFD700', // Gold
      '#32CD32', // Lime Green
      '#00CED1', // Dark Turquoise
      '#4169E1', // Royal Blue
      '#9932CC', // Dark Orchid
      '#FF69B4', // Hot Pink
      '#FF4500', // Orange Red
      '#FFA07A', // Light Salmon
      '#F08080', // Light Coral
      '#FF6347', // Tomato
      '#00FF7F', // Spring Green
      '#40E0D0', // Turquoise
      '#4682B4', // Steel Blue
      '#800080', // Purple
      '#DA70D6', // Orchid
      '#DC143C', // Crimson
      '#FFB6C1', // Light Pink
    ],
    numberOfConfettiObjects: 150,
    heightOfConf: '5px',
    widthOfConf: '5px',
    confettiDuration: 1500,
    confettiIteration: 1,
    initiateAnimationAfterView: false,
    animationDelay: 0,
    targetEl: 'target',
    ratioToTargetSize: 20,
  };


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
