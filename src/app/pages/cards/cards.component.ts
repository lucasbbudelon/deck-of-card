import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  get deckId(): string {
    return this.activatedRoute.snapshot.paramMap.get('deckId');
  }

  public cards: Card[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.deckDraw();
  }

  deckDraw() {
    this.apiService
      .getDeckDraw(this.deckId)
      .subscribe((draw) => this.cards = draw.cards);
  }

}
