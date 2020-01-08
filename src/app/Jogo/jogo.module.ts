import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JogoDetailComponent } from './jogo-detail/jogo-detail.component';
import { JogoListComponent } from './jogo-list/jogo-list.component';
import { JogoRoutingModule } from './jogo.routing.module';
import { SharedModule } from '../shared/shared.module';
import { JogoService } from './jogo.service';
import { JogoDetailResolver } from './jogo-detail/jogo-detail.resolver';
import { PeopleService } from '../people/people.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    JogoRoutingModule
  ],
  exports: [],
  declarations: [JogoListComponent, JogoDetailComponent],
  providers: [JogoService, JogoDetailResolver, PeopleService],
})
export class JogoModule {}
