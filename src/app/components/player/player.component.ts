import { PlayerService } from './../../services/player.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input() dataPlayer:any;
  constructor(private playerService:PlayerService , private router:Router) { }

  ngOnInit(): void {
  }
  goToPlayer(id:number){
    // displayplayer esm l path
    this.router.navigate([`displayPlayer/${id}`])
  }
  deletePlayer(id:number){
    this.playerService.deletePlayer(id).subscribe(()=>{alert('player deleted');})

  }
}
