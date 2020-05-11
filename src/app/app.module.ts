import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './cards/cards.component';
import { TypingComponent } from './typing/typing.component';
import { PipesComponent } from './pipes/pipes.component';
import { ConvertPipe } from './pipes/convert.pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClassDirective } from './directive/cases.directive';
import { TimesDirective } from './directive/times.directive';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TypingComponent,
    PipesComponent,
    ConvertPipe,
    DirectiveComponent,
    ClassDirective,
    TimesDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
