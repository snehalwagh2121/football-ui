import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { League } from './league';
import { Constants } from '../config/Constants';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceService {

  leaguesList: League[] = [];

  constructor(private http: HttpClient) {
    console.log("League service constructor called")
   }

  public callLeaguesAPI(): Observable<any>{
    return this.http.get(Constants.leagueurl);
  }

}
