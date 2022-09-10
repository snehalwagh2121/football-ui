import { Component, Injectable, OnInit } from '@angular/core';
import { League } from './league';
import { LeagueServiceService } from './league-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: League[] = [];
  year:string = "";
  
  constructor(private leagueService: LeagueServiceService, private _Activatedroute:ActivatedRoute) {
    console.log("league componenet constructor called");
    this.year=this._Activatedroute.snapshot.paramMap.get("year")!;
    console.log("year received: "+this.year);
   }

  ngOnInit(): void {
    console.log("league component called to get leagues");
    this.leagueService.callLeaguesBYSeasonAPI(this.year)
    .subscribe( (res) => {
      this.leagues= res;
    });
  }

  public getLeaguescomponent(){
    console.log("getting the details");
  }

}
