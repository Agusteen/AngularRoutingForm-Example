import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [MenuHeaderComponent],
  exports: [MenuHeaderComponent]
})
export class SharedModule { }
