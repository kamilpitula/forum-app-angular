import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavButtonComponent } from './buttons/nav-button/nav-button.component';
import { RouterModule } from '@angular/router';
import { BackNavBarComponent } from './controls/back-nav-bar/back-nav-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavButtonComponent,
    BackNavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackNavBarComponent,
    NavButtonComponent
  ]
})
export class LayoutModule { }
