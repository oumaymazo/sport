import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  addMatch:any={};
  constructor() { }

  ngOnInit(): void {
  }

  Add(){
  alert('hello')
  console.log("AddMatchesComponent -> addMatch", this.addMatch)

  }
}

