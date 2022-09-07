import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeagueServiceService } from './leagues/league-service.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path:"leagues", component:LeaguesComponent},
  {path:"", component:SeasonsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LeagueServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
