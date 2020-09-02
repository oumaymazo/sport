import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent implements OnInit {

  @Input() dataMatches:any;
  constructor() { }
  
  ngOnInit(): void {
     }

}
