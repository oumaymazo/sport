import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
displayedUser:any;
id:number;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.activatedRoute.snapshot.paramMap.get('id')
    this.userService.getUserById(this.id).subscribe(data=>{this.displayedUser=data
  });
  }

}
