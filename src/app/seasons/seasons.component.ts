import { Component, OnInit } from '@angular/core';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasons: number[] =[];

  constructor(seasonService: SeasonsService) { 
    console.log("seasons component called")
    seasonService.callLeaguesBySeasonsAPI()
    .subscribe( res=> {
      console.log("got response for seasons: "+ res);
      this.seasons= res;
    });
  }

  ngOnInit(): void {
  }

}
