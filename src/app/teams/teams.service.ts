import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../config/Constants';
import { Teams } from './Teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) { }

  getTeamsForLeague(leagueId: number): Observable<Teams[]> {
    console.log("calling teams Api for leagueId: "+leagueId);
    return this.http.get<Teams[]>(Constants.teamsApiForLeague+String(leagueId));
  }
}
