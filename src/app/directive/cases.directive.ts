import { Directive, ElementRef, Input } from '@angular/core';

//this is decorator
// [] in selector means you make use of this directive, we are going to add the word addCLass as an attribute on some element inside of template
@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  //   @Input() backgroundColor: string;
  constructor(private element: ElementRef) {}

  //Set is used for setting the variable.This helps you to do something else when the variable is being set, like checking variable (validating variable) before setting, logging, or calling other functions.
  @Input('appClass') set className(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
