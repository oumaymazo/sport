import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contact:any={};
  constructor() { }

  ngOnInit(): void {
  }
  validate(){
    console.log("ContactUsComponent -> contact",this.contact)

  }
}
