import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdressComponent } from './components/adress/adress.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { MainComponent } from './components/main/main.component';

import { NextComponent } from './components/next/next.component';
import { VideosComponent } from './components/videos/videos.component';
import { MainBlogComponent } from './components/main-blog/main-blog.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpcomingMatchComponent } from './components/upcoming-match/upcoming-match.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { TableComponent } from './components/table/table.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { AdminSpaceComponent } from './components/admin-space/admin-space.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdressComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    HomeComponent,
    MatchesComponent,
    EventComponent,
    ScoreComponent,
    NewsComponent,
    MainComponent,
    
    NextComponent,
    VideosComponent,
    MainBlogComponent,
    Blog2Component,
    InfoComponent,
    UpcomingMatchComponent,
    AddMatchesComponent,
    PlayersComponent,
    PlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    TableComponent,
    DisplayUserComponent,
    AdminSpaceComponent,
    EditUserComponent,
    ReversePipe,
    
  ],
  imports: [
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    FormsModule ,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
