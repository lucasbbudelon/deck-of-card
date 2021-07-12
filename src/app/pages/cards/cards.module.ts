import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards.routing';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
