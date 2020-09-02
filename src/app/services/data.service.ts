import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let matches = [
      {
        id: 1,
        nameOne: 'Real Madrid',
        nameTwo: 'Fc',
        scoreOne: '4',
        scoreTwo: '1',
      },
      {
        id: 2,
        nameOne: 'PSG',
        nameTwo: 'Liverpool',
        scoreOne: '2',
        scoreTwo: '3',
      },
      {
        id: 3,
        nameOne: 'Seville',
        nameTwo: 'Atletico Madrid',
        scoreOne: '0',
        scoreTwo: '1',
        res: '',
      },
      {
        id: 4,
        nameOne: 'Valencia',
        nameTwo: 'Real Madrid',
        scoreOne: '2',
        scoreTwo: '2',
        res: '',
      },
    ];

    let players = [
      { id: 1, date: 'May 20.2020', title: 'what happned to Messi' },
      { id: 2, date: 'June 13.2020', title: 'what happned to Ronaldo' },
      { id: 3, date: 'september 16.2020', title: 'what happned to Neimar' },
    ];

    let users = [
      { id: 1, FName: 'oumayma', LName: 'zouaoui' },
      { id: 2, FName: 'hamza', LName: 'neffati' },
      { id: 3, FName: 'alya', LName: 'neffati' },
      { id: 4, FName: 'hello', LName: 'its me' },
      { id: 5, FName: 'test', LName: 'testtest' },
    ];

    return { matches, players, users };
  }
}
