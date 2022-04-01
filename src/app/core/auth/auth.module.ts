import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ControlsModule } from '../controls/controls.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { StoreModule } from '@ngrx/store';
import { signInFeature } from './state/auth.reducer';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    ControlsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(signInFeature)
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthModule { }
