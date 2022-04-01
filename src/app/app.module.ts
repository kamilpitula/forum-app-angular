import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { AuthEffects } from './core/auth/state/auth.effects';
import { authReducer, signInReducer } from './core/auth/state/auth.reducer';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    StoreModule.forRoot({ authentication: authReducer, signIn: signInReducer }),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
