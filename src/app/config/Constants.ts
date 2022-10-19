import { Injectable } from '@angular/core'; 
@Injectable({
    providedIn: 'root'
  })
export class Constants{
    public static readonly leagueurl:String="http://15.207.99.254:9000/api/v1/league/listall";
    public static readonly seasonsurl:String="http://15.207.99.254:9004/api/v1/seasons/getSeasonsList/"
    public static readonly teamsApiForLeague:String="http://15.207.99.254:9001/api/v1/teams/getteamsbyleague/league/"
    public static readonly playersurl:String="http://15.207.99.254:9002/api/v1/players/getplayers/"
    public static readonly getLeaguesBySeasonUrl:String= "http://15.207.99.254:9000/api/v1/league/byseason/";

}