import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from '../leagues/league';
import { Teams } from './Teams';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  leagueId: number =0 ;
  leagueName: String ="";
  teams: Teams[] = [];
  season: String="";
  constructor(private teamsServie: TeamsService, private _Activatedroute:ActivatedRoute) {
    console.log("league componenet constructor called");
    this.leagueId=Number(this._Activatedroute.snapshot.paramMap.get("leagueId")!);
    this.leagueName=this._Activatedroute.snapshot.paramMap.get("name")!;
    this.season= this._Activatedroute.snapshot.paramMap.get("year")!;
    console.log("leagueId and name: "+this.leagueId+ this.leagueName);
   }

  ngOnInit(): void {
    //call teams api:
    console.log("calling teams service");
    this.teamsServie.getTeamsForLeague(this.leagueId)
    .subscribe(res => {
      console.log("teams received: "+res);
      this.teams= res;
    })
    
  }

}
