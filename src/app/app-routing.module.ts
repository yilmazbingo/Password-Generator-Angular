import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { TypingComponent } from './typing/typing.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  // { path: '', redirectTo: '/cards', pathMatch: 'full' },
  { path: 'cards', component: CardsComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directive', component: DirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
