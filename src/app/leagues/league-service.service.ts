import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Constants } from '../config/Constants';
import { Observable } from 'rxjs';
import { League } from './league';

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceService {


  constructor(private http: HttpClient) {
    console.log("League service constructor called")
  }

  callLeaguesBYSeasonAPI(year: string): Observable<League[]> {
    
    console.log("calling leagues api from service for year: "+year);
    if(year == undefined){
      year= "00";
      console.log("year is undefined");
    }
    var url= "http://localhost:9000/api/v1/league/byseason/";
    if(url == undefined){
      url="";
      console.log("url is undefined");
    }
    var getLeaguesBySeasonUrl= url.concat(year);
    console.log(getLeaguesBySeasonUrl);
    return this.http.get<League[]>(getLeaguesBySeasonUrl);
  }

  public callLeaguesAPI(): Observable<any>{
    return this.http.get(Constants.leagueurl);
  }

}
