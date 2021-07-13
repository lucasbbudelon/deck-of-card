import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deck',
    pathMatch: 'full'
  },
  {
    path: 'deck/:deckId/cards',
    canActivate: [AppGuard],
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'deck',
    canActivate: [AppGuard],
    loadChildren: () => import('./pages/deck/deck.module').then(m => m.DeckModule)
  },
  {
    path: 'deck/:deckId',
    canActivate: [AppGuard],
    loadChildren: () => import('./pages/deck/deck.module').then(m => m.DeckModule)
  },
  {
    path: 'users',
    canActivate: [AppGuard],
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./pages/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
