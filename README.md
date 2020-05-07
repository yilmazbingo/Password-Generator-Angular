### REACT SYNTAX vs ANGULAR SYNTAX

- we have class based components. all the event handlers will be generated here:
- html here is called angular template syntax. this is what jsx in react.
- event handler is passd into the () on the element. this is event binding syntax
           <div><button (click)="onButtonClick()">genereate</button></div>
    inside "" is evaluated as code. in react we would pass a reference as onClick={this.onButtonClick}
    
- inside class `password=''` is equal to `constructor(){this.password=""}`
#### property binding syntax
  <input type="text" [value]="password" />
   whenever password value changes Angular detects it. 
