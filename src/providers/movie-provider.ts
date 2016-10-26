import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  search(query:String) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=505968226452720712447df7ece22d79&query=';
    return this.http.get(url + query).map(res => res.json()).toPromise();
  }

}
