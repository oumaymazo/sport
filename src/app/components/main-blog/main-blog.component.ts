import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {
blogs=[{date:"May 20.2020",title:"what happned to Messi"},
{date:"June 13.2020",title:"what happned to Ronaldo"}]
  constructor() { }

  ngOnInit(): void {
  }

}
