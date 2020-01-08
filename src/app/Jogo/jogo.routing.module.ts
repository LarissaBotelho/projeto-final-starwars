
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoListComponent } from './jogo-list/jogo-list.component';
import { JogoDetailComponent } from './jogo-detail/jogo-detail.component';
import { JogoDetailResolver } from './jogo-detail/jogo-detail.resolver';

const routes: Routes = [
  { path: 'id/:id', component: JogoDetailComponent,  resolve: [JogoDetailResolver]},
  { path: 'list', component: JogoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoRoutingModule { }
