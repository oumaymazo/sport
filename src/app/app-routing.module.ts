import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AdminSpaceComponent } from './components/admin-space/admin-space.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'contact' , component:ContactUsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path:'matches',component:MatchesComponent},
  {path:'home',component:HomeComponent},
  {path:'addMatches',component:AddMatchesComponent},
  {path:'players',component:PlayersComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'displayPlayer/:id',component:DisplayPlayerComponent},
  {path:'admin-space',component:AdminSpaceComponent},
  {path:'displayUser/:id',component:DisplayUserComponent},
  {path:'editUser/:id',component:EditUserComponent},
  
  // displayUser/:id c'est un path dynamique

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
