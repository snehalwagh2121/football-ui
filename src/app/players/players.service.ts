import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../config/Constants';
import { Players } from './Players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {


  constructor(private httpClient: HttpClient) { }

  callPlayersApi(teamId: String, season: String):Observable<Players[]> {
      console.log("calling players api for teamId: "+teamId+" and season: "+season);
      return this.httpClient.get<Players[]>(Constants.playersurl.toString()+teamId+"/"+season);
  }
}
