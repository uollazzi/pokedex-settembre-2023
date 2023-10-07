import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private baseURL = "https://api.pokemontcg.io/v2";

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": "d9685b88-0b98-4b0d-b1ab-9f2e7fc30217"
    })
  };

  search(pageSize: number = 20, page: number = 1): Observable<SearchResponse> {
    // https://api.pokemontcg.io/v2/cards?pageSize=20
    return this.http.get<SearchResponse>(`${this.baseURL}/cards?pageSize=${pageSize}&page=${page}`, this.httpOptions);

  }
}
