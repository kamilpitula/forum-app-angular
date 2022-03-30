import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../core/controls/controls.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
