import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { LoginGuard } from './login.guard'
import { LandingComponent } from './landing/landing.component';
import { DibetesComponent } from './dibetes/dibetes.component';
import { MainComponent } from './main/main.component';
import { PredictorComponent } from './predictor/predictor.component';
import { ScComponent } from './sc/sc.component';
import { TrackHealthComponent } from './track-health/track-health.component';
import { ViewTrackComponent } from './view-track/view-track.component';

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "user",
    component: LandingComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: "main",
        component: MainComponent,
      },
      {
        path: "track",
        component: TrackHealthComponent
      },
      {
        path: "viewtrack",
        component: ViewTrackComponent
      },
      {
        path: "predictor",
        component: PredictorComponent,
        children: [
          {
            path: "diabetes",
            component: DibetesComponent,
          },
          {
            path: "sc",
            component: ScComponent,
          },
        ]
      },
    ]
  },
  {
    path: "",
    component: LoginComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
