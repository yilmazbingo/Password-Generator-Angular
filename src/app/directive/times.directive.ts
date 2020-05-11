import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// we use TemplateREf and ViewContainerRef to customize th arguments that are accepted into our constructor
// viewContainer is ref to the element that we applied our directive to. it is kinda custom version of ElementRef.
// it gives us the ability to easily add in more elements or remove elements or essentially render some templates inside there.
// TemplateRef is reference to elements are placed inside of the element that we applied our directive to.
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
      this.viewContainer.createEmbeddedView(this.templateRef, { index: i });
    }
  }
}
