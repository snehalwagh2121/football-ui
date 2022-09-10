import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeagueServiceService } from './leagues/league-service.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { RouterModule, Routes } from '@angular/router'
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  {path:"players/:teamId/:season", component:PlayersComponent},
  {path:"teams/:leagueId/:name/:year", component:TeamsComponent},
  {path:"leagues/:year", component:LeaguesComponent},
  {path:"", component:SeasonsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    SeasonsComponent,
    TeamsComponent,
    PlayersComponent
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
