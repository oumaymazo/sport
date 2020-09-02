import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  displayedMatch:any;
  id:number;

  constructor(private matchService:MatchService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.activatedRoute.snapshot.paramMap.get('id')
    this.matchService.getMatchById(this.id).subscribe(data=>{this.displayedMatch=data})

  }

}
