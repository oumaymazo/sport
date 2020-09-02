import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: any;
id:number;
  constructor(private userService: UserService, private router:Router) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log("AdminComponent -> ngOnInit -> this.users", this.users)
    });
  }
  goToUser(id:number){
this.router.navigate([`displayUser/${id}`])
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(()=>{this.userService.getAllUsers().subscribe(data=>{this.users=data})})
  }
//   editUser(user:any){
//  this.userService.editUser(user).subscribe(()=>{alert(`edited ${user.id}`)})
//   }
  goToEditUser(id:number){
    this.router.navigate([`editUser/${id}`])
      }
}
