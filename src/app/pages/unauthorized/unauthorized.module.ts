import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    ComponentsModule
  ]
})
export class UnauthorizedModule { }
