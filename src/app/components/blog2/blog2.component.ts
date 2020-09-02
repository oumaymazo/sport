import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component implements OnInit {
  @Input() dataBlog:any;
  constructor() { }

  ngOnInit(): void {
  }

}
