import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeedbackComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
