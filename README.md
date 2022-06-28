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



## 1. **TEMAS**
---

| fecha práctica  | ultima vista  |
| -------------   | ------------- |
| 24/06/2022      |  --           |

## 1.1 Componentes

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

* Generar componentes desde el cli de angular
``` powershell
> ng generate component [name-component]
ó
> ng g c [name-component] 
```



## 1.2 Directivas 
> `*ngFor, *ngIf, *ngSwitch` <br>
> []()

`Ejemplo` uso *ngFor
``` html
    <ul>
        <li *ngFor="let user of users">{{ user }}</li>
    </ul>
```
`Ejemplo` uso *ngIf
``` html
    <p *ngIf="validate">
        Este texto se muestra cuando el valor es verdadero
        <br>
        valor de la variable es {{ validate }}
    </p>
```


### *** Pasar `entradas` (datos) a un componente
- import input
- entrada 
- componente hijo
- 
> Para que un componente hijo reciba reciba una entrada (dato), debemos importar `import { ... Input } from '@angular/core';` y luego instanciar la entrada en la clase `@Input() nameUser: any;`

``` typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() nameUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}

```
Después podemos pasar la entrada de la siguiente manera: `[nameUser] = "user"`. Esto se supone que se hace desde un componente padre.
- recordar los corchetes, '[]'.
``` html
<ul>
    <li *ngFor="let user of users">
        <app-user [nameUser] = "user"></app-user>
    </li>
</ul>
```

### *** typescript
> Es una extención de javascript, proveendo principalmente el mecanismo modo estricto para la codificación. Podemos notar su uso cuando estamos obligados a declarar el tipo de dato de nuestras propiedades.   

``` typescript
nameuser: string  = 'kevin';
users: string[] = ['kevin', 'blanca', 'sofia'];
validate: boolean = true;
userdata : {
  id: number;
  name: string;
}

// inicializando valores para los datos ngModel
name: string = 'kevin';
age: number = 26;

```
- [Declarar variables con tipos ](https://youtu.be/OrCdt865WOg)


### 1.3 `Eventos` en Angular  

> Los eventos en Angular, son mecanismos que permiten facilitar funciones de interactividad con los elementos de la vista, como los clicks, hovers, solapamientos, etc. Algunos event se ven como estos:
> `(click), (submit)`

``` html
<div>
    <form action="" (submit)="onSubmit()">
        <input type="text">
        <input type="submit" value="Enviar">
    </form>

    <input type="button" value="GUARD" (click)="clickGuard()" >
</div>
```
Se declaran las `funciones/metodos` de los eventos en la clase del componente escrito en typescript
``` typescript
...
export class XyzComponent implements OnInit {
  
  ...
  clickGuard(){
    alert('Guard clicked');
  }

  onSubmit(){
    return false;
  }
  ...
}

```

### 1.4 `Referencias` en Angular
> Es una especie de ID para identificar un elemento, como bien podría ser un 'input' o cualquier elemento html. 

html
``` html
<form action="" (submit)="addItems(newitem)">
    <input type="text" #newitem>
    <input type="submit" value="Enviar">
</form>
```
typescript
``` typescript
import { Component, OnInit} from '@angular/core';
...
export class XyzComponent implements OnInit {
...
  addItems(text: any){
    console.log(text.value);
    return false;
  }
...
}

```


### 1.5 `Doble enlace de datos` en Angular (data biding)
- 
> Crea un espejo a una propiedad (valor) que se puede utilizar en la vista. 
> Este mecanismo permite vincular los datos, reflejando el valor del mismo en todos los lugares posibles donde se utilice. <br/>
> * Para poder usarlo necesitamos importar el módulo `FormsModule` en el archivo `app.module.ts`. 
> * Acontinuación agregamos la importación de `FormsModule` dentro de *imports:[...].
> * Instanciamos las variables en la clase del component. <br/>
> * utilizamos `[(NgModule)]` como una propiedad en los elementos html (input). <br/>

Importando módulo en `app.module.ts`
```javascript
...
import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    FormsModule
  ],
})

```
Declarando las variables en la clase del component. <br/>
``` typescript
// inicializando valores para los datos ngModel.
name: string = 'kevin';
age: number = 26;

```

En la plantilla del componente. Usamos (ngModel)
``` html
<div class="">
    <h3>Data biding</h3>
    <form action="">
        <input type="text" name="name" [(ngModel)]="name" >
        <input type="text" name="age" [(ngModel)]="age" >
    </form>
    name: {{ name }} <br>
    age: {{ age }}
</div>
```


### 1.6 `Servicios` en Angular
> Se podría decir que son `clases, metodos` para reutilizarlos en cualquier parte de nuestro código/proyecto.
> - Podemos generar los `servicios` mediante la consola utiulizando angular cli, con la siguiente directiva: `ng generate service`.

Creando nuevo servicio en angular.
``` powershell
> ng generate service [data]
```

Esta directiva generará dos archivos `.service` en el proyecto. Por lo que podremos contruir parate de la lógica de nuestro servicio dentro de una clase. <br/>
**Así se vería un service**, en donde además importamos el paquete `HttpClient`. 
``` typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('data service is ready');  
  }

  getData(){
    
  }
}
```

Para poder utilizar este servicio el proyecto, necesitaremos indicarlo a traves del archivo principal `app.module`. <br/>
- Primero importamos el servicio `import { DataService } from './data.service';`.
- Estabecemos el nombre del servicio importado, en la propiedad providers: `providers: [DataService],`

También podemos ver un ejemplo de como se importa el **módulo** `HttpClientModule`.
``` Typescript
...
import { HttpClientModule } from '@angular/common/http';
...
import { DataService } from './data.service';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [...]
})
export class AppModule { }
```

**Usar el servicio en un componente** <br/>
- Importamos el servicio `import { DataService } from './data.service';`.
- Lo podemos usar en el constructor `constructor(private dataService: DataService) {}`
``` typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private dataService: DataService) {}

}

```



### 1.7 Importando biblioteca `HttpClient`
> Importamos esta biblioteca para realizar peticiones http a un servidor. Por ejemplo obtener datos desde `jsonplaceholder` (Este es un servico que provee datos ficticios, comportandose como una API, facilitando el acceso de información para completar las vistas de nuestra aplicación).    
> - https://jsonplaceholder.typicode.com/

Importamos la bilbioteca HttpClient de la siguiente manera.
``` typescript
...
import { HttpClient } from '@angular/common/http';

...
export class DataService {

  constructor(private http: HttpClient) {
    console.log('data service is ready');  
  }
...
}

```

**Obteniedo datos con HttpClient desde un _`service`_** <br/>
Primero establecemos el código de la petición en el servicio.
- Se crea el método `getData()`, y luego se retorna la petición con `this.http.get([api])`.
``` Typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('data service is ready');  
  }

  getData(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
```
Luego podemos hacer uso del método del servicio para obtener el resultado de la petición.
- Importamos el servicio `import { DataService } from './data.service';`.
- Estamos usando el método en el constructor de un `componente`. 
``` Typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  posts: Array<any> = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}

```

Visualizamosn el resultado en el template del componente: 
``` html
<div>
    <ul *ngFor="let post of posts">
        <h3>{{ post.title }}</h3>
        <p> {{ post.body }} </p>
    </ul>
</div>
```

**Creando una _`Interfas`_ para peticiones(datos)** <br/>
Podemos crear una interfaz para tener una estructura visible del tipo de información que vamos ha manejar. <br/>
La estructura del tipo lo escribimos en un archivo separado, que podemos crear en la raíz de nuestro proyecto, dentro de la carpeta `src/app` (opcional). 
``` typescript
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
```


## 1.8 `Enrutadores` en Angular
Importamos el módulo en `app.module.ts`
``` typescript
import {RouterModule, Route} from '@angular/router';
```
Creamos una variable donde vamos a guardar las rutas. 
``` typescript
const routes: Route[] = [
  { path: '', component: CardComponent},
  { path: 'about', component: UserComponent },
];
```
Indicamos el uso del módulo. 
- `...(routes)` es la variable que tiene todas las rutas creadas anteriormente.
``` typescript
  ...
  imports: [
    ...
    RouterModule.forRoot(routes)
  ],
```
Establecemos en el template principal (`app.component.html`) del componente la etiqueta `<router-outlet></router-outlet>`
``` html
<router-outlet></router-outlet>
```

<br>

**Establecer `routerLink` Angular**
> Básicamente sirve para referenciar las diferetes vistas que tengamos configurados en nuestras rutas. La diferencia es que este mecanismo no recarga la página. 

``` html
<ul>
    <li><a routerLink="/panel">Panel</a></li>
    <li><a routerLink="/about">Abuot</a></li>
    <li><a routerLink="/register">Register</a></li>
</ul>
<router-outlet></router-outlet>
```

## 1.9 Convertir el proyecto a JS `ng Build --prod`
> Con esta directiva generaos el proyecto en javascript, el cual podemos subir a cualquier servidor que pueda proveer archivos estáticos.
``` powershell
ng build --prod 
```
> Puedes ver que después de ejecutar esta directiva tendrás una carpeta generada con todos los archivos generados por el build de angular. Pudes usar esa carpeta para subir y ejecutar el proyecto.

<br>
<br>

## **PALABRAS CLAVES**
---
- Angular cli
- components
- directivas
- templates
- servicios


``` powershell
git status
git commit -am "Initial commit"

```


## referencias: 
* Recurosos
  - [jsonplaceholder / api json data](https://jsonplaceholder.typicode.com/)
* Courses Youtube Fazt :shipit:
  - [x] [Angular 6 Curso Practico, Parte 1](https://www.youtube.com/watch?v=AR1tLGQ7COs) :+1:
  - [ ] [Angular 6 Curso Practico, Parte 2](https://www.youtube.com/watch?v=OrCdt865WOg)

* Otras opciones ( ***pendientes*** )
  - [ ] [Curso Angular en Español - Tutorial de Angular 12 desde cero](https://www.youtube.com/watch?v=i-oYrcNtc2s)

* Adicionales
  - [x] CSS Card Hover Effects [Video link youtube](https://www.youtube.com/watch?v=daAVTmsMXeI)