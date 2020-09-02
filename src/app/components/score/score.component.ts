import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  @Input() dataScore: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();
  verif: string;
  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit(): void {
    this.verif = this.compare(this.dataScore.scoreOne, this.dataScore.scoreTwo);
  }
  compare(a: number, b: number) {
    let res: string;
    if (a > b) {
      res = '(win)';
    } else if (a < b) {
      res = '(lose)';
    } else {
      res = '(draw)';
    }
    return res;
  }
  goToMatch(id: number) {
    this.router.navigate([`displayMatch/${id}`]);
  }
  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(() => {
      alert('match deleted');
      this.matchService.getAllMatches().subscribe(data => {
        this.newMatches.emit(data);
      })
    })
  }
}
