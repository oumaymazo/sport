import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() dataUser:any;

  constructor() { }

  ngOnInit(): void {
    console.log("TableComponent -> dataUser")
  }

}
