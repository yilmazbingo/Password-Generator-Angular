          ### REACT SYNTAX vs ANGULAR SYNTAX
          
  #### 5 different projects to compare react.js syntax and angular syntax. 
  each route refers to a different app
  
    const routes: Routes = [
    { path: 'cards', component: CardsComponent },
    { path: 'typing', component: TypingComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'directive', component: DirectiveComponent },
    ];

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

#### comparing two strings (typing app)
- *ngFor directive is used in the arrays. That is why we need to convert it to the array with split(""). 
- instead of writing the starting text into one block, put each letter into a span so we can easily style it
   
     <p class="has-text-centered">
        <span
          [class]="compare(letter, enteredText[i])"
          *ngFor="let letter of randomText.split(''); let i = index"
        >
          {{ letter }}
        </span>
      </p>
      
- pipes are just small functions to alter data for use in template.
- there is no Angular-like pipes in react.js
- we can create our own custom pipes:
  
  import { Pipe, PipeTransform } from '@angular/core';

          @Pipe({
            name: 'convert',
          })
          export class ConvertPipe implements PipeTransform {
            trasform(value: any, ...args: any[]): any {
              return value * 1.60934;
            }
          }
  - anytime we use a pipe, its transform function will be invoked. this pipe just converts miles to km. in order to use this pipe we have to register it to the app.module.ts declarations[].
  - if we pass an argument it will be passed to the args[]. 
  
        export class ConvertPipe implements PipeTransform {
        transform(value: any, targetUnit: string): any {
          if (!value) return null;
          switch (targetUnit) {
            case 'km':
              return value * 1.60934;
            case 'm':
              return value * 1609.34;
            default:
              return value;
          }
        }
        
   - we can use pipes inside *ngIf as follow
        *ngIf="(miles | convert:"km")>10"

### Directives

- Can be used to modify the structure or properties for HTML elements. 
       
       <a
        href="{{ image.url }}"
        class="pagination-link"
        [ngClass]="{ 'is-current': i === currentPage }"
        >{{ i + 1 }}
      </a>
      
  [ngClass] will check if the condition is true, then will add that classname to the class, if not will not do anything. {} refers to object. 
  - conditionally setting an attribute in angular.
          [attr.disabled]="currentPage === 0 ? true : false"

- In react.js if we are linking the user to outside of the app, we use anchor tag otherwise we use Link compoennt.
- `*ng` refers to structural directive which changes the structure of HTML. both *ngFor and *ngIf are structural directives. we can only apply one structural directive to any given element. 
- `ng-container` does not create an HTML element. it exist solely so we can apply extra structural directives. 

       <ng-container *ngFor="let image of images; let i = index">
            <li class="">
              <a
                (click)="currentPage = i"
                class="pagination-link"
                [ngClass]="{ 'is-current': i === currentPage }"
                >{{ i + 1 }}
              </a>
            </li>
          </ng-container>
          
 - angular will process the *ngFor but it will not display anyhting for ng-container. instead it is just going to take whatever contents are in this case it is <li></li> and will show that inside our template. 
 - ng-container is like React.Fragment
 - we cannot use Math inside the template.
 
       <div [ngSwitch]="currentPage">
        <div *ngSwitchCase="0">currentpage is zero</div>
        </div>
 - currentPage = 0, it will display the child element. 
 
 #### Generating Custom Directives
 
       import { Directive } from '@angular/core';

      //this is decorator
      // [] in selector means you make use of this directive, we are going to add the word addCLass as an attribute on some element inside of template
      @Directive({
        selector: '[appClass]',
      })
      export class ClassDirective {
        constructor() {
          console.log('class directive is used');
        }
      }
      
  - we have to register this to the app.modules declarations array. I will use this directive to apply a bg color to whatever element,we apply the directive to.
     
      import {ElementRef} from "@angular/core"
      @Directive({
        selector: '[appClass]',
      })
      export class ClassDirective {
        constructor(private element: ElementRef) {
          console.log('class directive is used');
        }
      }

- as soon as we add `element` argument to the constructor, Angular will make sure that whenever we create an instance of class directive, a first argument to the constructor is going to be the element that we applied the directive to. then "element" a direct reference to that html element. We can access a HTML element. 
   we have to be aware of `this.element` is not the actual element. 
   `this.element.nativeElement` 
   
  - Communicating from parent component to child component.
   When it comes to passing data from parent to child component we use property binding in Angular. In this case, we send the data from the parent component to the child component using an attribute. This attribute can then be accessed within the child component using the @input decorator. in React this is done by `props`.
   - Communicate information into a directive we are gonna use the property binding syntax.
   - when angular sees appClass it will create an instance of ClassDirective. that means we are going to run all the code inside the constructor. as soon as we run the constructor, 
   - Directives are treated by Angular similarly how normal components are treated. behind the scenes, when angular starts to parse our template, it sees the `appClass` directive. it will then create an instance of the matching class. then it sees
   `[backgroundColor]=" ` red`"` not angular assumes that there is backgroundColor property set in directive class. so angular needs to detect that `backgroundColor` property set. we use a feature of typescript.
   
   - in our current implementation we are using both `appClass` and [backgroundColor]. instead we could do this:
   
        @Input() set appClass(color: string) {
        this.element.nativeElement.style.backgroundColor = color; }
     in our html element
     
           <h4  [appClass]="'red'">{{ images[currentPage].title }}</h4>

- for the sake of readability, this does not look good. because we have to explicitly mention on what we are working on.  we can keep the html element as it is then we can alter the code in the class directive:
    
            @Input('appClass') set backgroundColor(color: string) {
              this.element.nativeElement.style.backgroundColor = color;
               }
   
 #### Replacing ngClass
 -instead of changing background color, we focus on the class name, means that we write our ngClass directive.
 
     @Input('appClass') set className(classObj: any) {
        for (let key in classObj) {
          if (classObj[key]) {
            this.element.nativeElement.classList.add(key);
          } else {
            this.element.nativeElement.classList.remove(key);
          }
        }
      }
      
  now we can replace [ngClass] with [appClass]

#### Custom Structural Directives:

- so far we used *ngFor and *ngIf. they are structual directives.

        import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

        //we use TemplateREf and ViewContainerRef to customize th arguments that are accepted into our constructor
        //viewContainer is ref to the element that we applied our directive to. it is kinda custom version of ElementRef.
        //it gives us the ability to easily add in more elements or remove elements or essentially render some templates inside there.
        //TemplateRef is reference to elements are placed inside of the element that we applied our directive to.
        @Directive({ selector: '[appTimes]' })
        export class TimesDirective {
          constructor(
            private viewContainer: ViewContainerRef,
            private templateRef: TemplateRef<any>
          ) {}

          //whenever angular sees the 'appTimes' we are going to run follwoing function
          @Input('appTimes') set render(times: number) {
            //we clear out any elements that are currently inside of viewContainer
            this.viewContainer.clear();

            for (let i = 0; i < times; i++) {
              this.viewContainer.createEmbeddedView(this.templateRef, {});
            }
          }
        }
        
     this can be replaced with *ngFor. *ngFor is like iterating array with array.map() in React.js.
     - {} object that we passed into the `this.viewContainer.createEmbeddedView(this.templateRef, {})` referred to as **context**. we can add different properties in here. it will make some different values accessible inside of our template through our directive. so if we add **{index:i ,}** we can use it in the template. 
            `<ng-container *ngFor="images.length; let i = index">`

     `



