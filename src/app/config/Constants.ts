import { Injectable } from '@angular/core'; 
@Injectable({
    providedIn: 'root'
  })
export class Constants{
    public static readonly leagueurl="http://localhost:9000/api/v1/league/listall";
    public static readonly seasonsurl="http://localhost:9004/api/v1/seasons/getSeasonsList/"
    public static readonly teamsApiForLeague="http://localhost:9001/api/v1/teams/getteamsbyleague/league/"
    public static readonly playersurl="http://localhost:9002/api/v1/players/getplayers/"
    public static readonly getLeaguesBySeasonUrl: "http://localhost:9000/api/v1/league/byseason/";

}