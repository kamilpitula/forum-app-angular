import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ControlsModule } from '../controls/controls.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    ControlsModule
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthModule { }
