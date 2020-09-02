import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl='api/matches'
  //  matches hia bidha esm l objet fel dataservice
  constructor(private httpClient:HttpClient) { }
  // read all(cRud)
  getAllMatches()
  {
    return this.httpClient.get(this.matchUrl);
  }
  // read one (cRud)
  getMatchById(id:number)
  {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  deleteMatch(id:number){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  addMatch(match:any){
   return this.httpClient.post(this.matchUrl,match);
  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);
  }
}
