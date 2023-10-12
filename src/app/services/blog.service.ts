import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Articolo } from '../models/articolo';
import { environment } from 'src/environments/environment';
import { gestisciErrore, handleError } from './utilities';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    })
  };

  // getArticoli(): Observable<Articolo[]> {
  //   return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
  //     .pipe(
  //       catchError(gestisciErrore<Articolo[]>("get articoli", []))
  //     )
  // }

  // getArticoli(): Observable<Articolo[] | Error> {
  //   return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
  //     .pipe(
  //       catchError(handleError)
  //     )
  // }

  getArticoli(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
      .pipe(
        tap({
          error: (e: HttpErrorResponse) => console.error(e.error)
        })
      )
  }
}
