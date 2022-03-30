import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './buttons/nav-button/nav-button.component';
import { BackNavBarComponent } from './back-nav-bar/back-nav-bar.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavButtonComponent,
    BackNavBarComponent,
    InformationPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavButtonComponent,
    BackNavBarComponent,
    InformationPanelComponent
  ]
})
export class ControlsModule { }
