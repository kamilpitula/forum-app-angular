import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../core/controls/controls.module';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthPanelComponent,

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
