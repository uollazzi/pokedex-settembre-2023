import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  popular() {
    const url = `https://api.themoviedb.org/3/popular`;
    return this.http.get<any>(url);
  }

  search(q: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`;
    return this.http.get<any>(url);
  }
}
