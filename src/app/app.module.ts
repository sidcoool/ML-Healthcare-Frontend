import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { DibetesComponent } from './dibetes/dibetes.component';
import { MainComponent } from './main/main.component';
import { PredictorComponent } from './predictor/predictor.component';
import { ScComponent } from './sc/sc.component';
import { TrackHealthComponent } from './track-health/track-health.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewTrackComponent } from './view-track/view-track.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    DibetesComponent,
    MainComponent,
    PredictorComponent,
    ScComponent,
    TrackHealthComponent,
    ViewTrackComponent,
    // ChartsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NoopAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
