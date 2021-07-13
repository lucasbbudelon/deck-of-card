import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Deck, Draw } from './api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDeckDraw(deckId: string, numberOfCards: number = 8): Observable<Draw> {
    return this.httpClient.get<Draw>(`${environment.deckOfCardsApi}/deck/${deckId}/draw/?count=${numberOfCards}`);
  }

  getDeck(id: string) {
    return this.httpClient.get<Deck>(`${environment.deckOfCardsApi}/deck/${id}?jokers_enabled=true`);
  }

  postDeck() {
    return this.httpClient.get<Deck>(`${environment.deckOfCardsApi}/deck/new?jokers_enabled=true`);
  }
}
