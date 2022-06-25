# MyFirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

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



---
---
---
---

##### firstapp-angular
# **APUNTES DE PRÁCTICAS**



## **TEMAS**
---

| fecha práctica  | ultima vista  |
| -------------   | ------------- |
| 24/06/2022      |  --           |

## Componentes

> Se puede entender como piezas o partes de una página. Pueden ser denominados como elementos compuestos por etiquetas html, con un estilos y funcionalidades especificas. 

``` typescript  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```



## **PALABRAS CLAVES**
---
- Angular cli
- components
- directivas
- templates


``` powershell
git status
git commit -am "Initial commit"

```


## referencias: 
* Courses Youtube Fazt :shipit:
  - [x] [Angular 6 Curso Practico, Parte 1](https://www.youtube.com/watch?v=AR1tLGQ7COs) :+1:
  - [ ] [Angular 6 Curso Practico, Parte 2](https://www.youtube.com/watch?v=OrCdt865WOg)

* Otras opciones ( ***pendientes*** )
  - [ ] [Curso Angular en Español - Tutorial de Angular 12 desde cero](https://www.youtube.com/watch?v=i-oYrcNtc2s)

* Adicionales
  - [x] CSS Card Hover Effects [Video link youtube](https://www.youtube.com/watch?v=daAVTmsMXeI)