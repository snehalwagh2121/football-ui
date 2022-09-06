import { Component, Injectable, OnInit } from '@angular/core';
import { League } from './league';
import { LeagueServiceService } from './league-service.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  league: League[] = [];

  constructor(private leagueService: LeagueServiceService) {
    console.log("league componenet constructor called")
   }

  ngOnInit(): void {
    console.log("league component called to get leagues");
    this.leagueService.callLeaguesAPI().subscribe(res => {
      console.log(res);
      this.league= res;
    });
  }

  public getLeaguescomponent(){
    console.log("getting the details");
    console.log(this.league);
    if(this.league.length == 0){
      console.log("inside waiting time");
      setTimeout(()=>{
        console.log("please have patience!!");
      }, 5000);
    }
    return this.league;
  }

}
