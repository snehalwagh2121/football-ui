import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from './Players';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  teamId : String = "";
  season : String = "";

  players: Players[]= [];

  constructor(private playersService:PlayersService, private _Activatedroute:ActivatedRoute) { 
    console.log("inside players constructor");
    this.teamId= this._Activatedroute.snapshot.paramMap.get("teamId")!;
    this.season= this._Activatedroute.snapshot.paramMap.get("season")!;
    console.log("initialization done");
  }

  ngOnInit(): void {
    console.log("calling the service layer");
    this.playersService.callPlayersApi(this.teamId, this.season)
    .subscribe( res=>{
        this.players= res;
    })
  }

}
