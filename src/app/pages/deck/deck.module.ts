import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DeckComponent } from './deck.component';
import { DeckRoutingModule } from './deck.routing';

@NgModule({
  declarations: [DeckComponent],
  imports: [
    CommonModule,
    DeckRoutingModule
  ]
})
export class DeckModule { }
