import { Component, OnInit } from '@angular/core';

import { Deck } from './services/api.models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public deck: Deck = {};

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.newDeck();
  }

  onNewDeck(deck: Deck) {
    this.deck = deck;
  }

  newDeck() {
    this.apiService
      .postDeck()
      .subscribe((deck) => this.deck = deck);
  }
}
