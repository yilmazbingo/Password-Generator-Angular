### REACT SYNTAX vs ANGULAR SYNTAX

- we have class based components. all the event handlers will be generated here:
- html here is called angular template syntax. this is what jsx in react.
- event handler is passd into the () on the element. this is event binding syntax
           <div><button (click)="onButtonClick()">genereate</button></div>
    inside "" is evaluated as code. when Angular sees "" inside .html file, it goes to the app.components.ts file and looks for the code.  in react we would pass a reference as onClick={this.onButtonClick} 
    
- inside class `password=''` is equal to `constructor(){this.password=""}`
#### property binding syntax
  <input type="text" [value]="password" />
   whenever password value changes Angular detects it. 
- in Angular we use `input` event instead of onChange in React to handle the changing input texts. they both are using the "input" event of vanilla js behind the scene.

       <input type="text" (input)="onChangeLength($event.target.value)" />
       
#### Structural Directice
Structural Directives adds or removes HTML elements. 
      <div class="box" *ngIf="password">
        <label>Your Password</label>
        <input class="input" [value]="password" />
      </div>
in react we would conditionaly render `{password && <div></div>}`

Attribute Directives changes the properties of the HTML element it gets applied to. 

- sudo npm i -g now 
- now login
- now 

## Routing in Angular

- Create new component. we keep the each component inside a new folder and put everything related to this component inside this folder. Once you create a new folder, register it into the `app.module.ts`. 

           declarations: [AppComponent, CardsComponent],
- now we need to register this component to the `app.routing.module`. this module is like `BrowserRouter` of react.js and each path inside in it is `Route` component of the BrowserRouter.

        const routes: Routes = [
          { path: 'cards', component: CardsComponent },
        ];

- we have to call "router-outlet" directive. it is like a component. so `router-outler` is the router. we need to add this to the app.component.html


- "assets" is the folder that shipped with Angular. this is where store our publicly available files. in next.js it is "public" folder. In webpack and express we name this directory.

- For each component, we will have our own css files and in this css we can target only that component's elements or classes. 


