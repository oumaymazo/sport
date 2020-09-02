import { ActivatedRoute } from '@angular/router';

import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  constructor(private playerService:PlayerService, private acrivatdRoute:ActivatedRoute) { }
displayedPlayer:any;
id:number;
  ngOnInit(): void {
this.id=+this.acrivatdRoute.snapshot.paramMap.get('id')
this.playerService.getPlayerById(this.id).subscribe(data=>{this.displayedPlayer=data})
  }

}
