import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../config/Constants';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private http: HttpClient) { }

  public callLeaguesBySeasonsAPI(): Observable<any>{
    console.log("calling the seasons backend api");
    return this.http.get(Constants.seasonsurl);
  }
}
