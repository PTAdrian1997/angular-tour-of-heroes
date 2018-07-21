import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import {MessageService} from './message.service';

import { Observable, of } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

	private heroesUrl = 'api/heroes';

	constructor(private messageService: MessageService,
				private http: HttpClient
				) { }

	public addMessage(message: string): void {
		this.messageService.add(message);
	}
	
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
	  return of(HEROES.find(hero => hero.id == id));
  }
  
  private log(message: string): void {
	  this.messageService.add(`HeroService: ${message}`);
  }
  
}
