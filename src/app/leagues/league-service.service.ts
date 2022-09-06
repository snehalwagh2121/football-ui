import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Constants } from '../config/Constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceService {

  constructor(private http: HttpClient) {
    console.log("League service constructor called")
  }

  public callLeaguesAPI(): Observable<any>{
    return this.http.get(Constants.leagueurl);
  }

}
