import { Injectable } from '@angular/core'; 
@Injectable({
    providedIn: 'root'
  })
export class Constants{
    public static readonly leagueurl="http://localhost:9000/api/v1/league/listall";
    public readonly seasonsurl="http://localhost:9000/api/v1/seasons/getseasonsbyleague/"
    public readonly teamsurl="http://localhost:9001/api/v1/teams/getteamsbyleague/league/"
    public readonly playersurl="http://localhost:9002/api/v1/players/getplayers"
}