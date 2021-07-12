import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  get deckId(): string {
    return this.activatedRoute.snapshot.paramMap.get('deckId');
  }

  public deck: Deck = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    if (this.deckId) {
      this.getDeck();
    } else {
      this.postDeck();
    }
  }

  getDeck() {
    this.apiService
      .getDeck(this.deckId)
      .subscribe((deck) => this.deck = deck);
  }

  postDeck() {
    this.apiService
      .postDeck()
      .subscribe((deck) => this.deck = deck);
  }
}
