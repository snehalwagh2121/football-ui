import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { League } from './leagues/league';
import { LeagueServiceService } from './leagues/league-service.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { SeasonsComponent } from './seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LeagueServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
