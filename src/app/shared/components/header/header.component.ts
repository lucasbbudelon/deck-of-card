import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNewDeck: EventEmitter<Deck> = new EventEmitter<Deck>();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  newDeck() {
    this.apiService
      .postDeck()
      .subscribe((deck) => this.onNewDeck.emit(deck));
  }
}
