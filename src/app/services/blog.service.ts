import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Articolo, NuovoArticoloDto } from '../models/articolo';
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
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    }

    return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", httpOptions)
      .pipe(
        // tap(articoli => console.log(articoli.length + " articoli ricevuti dal server.")),
        tap({
          next: (articoli => console.log(articoli.length + " articoli ricevuti dal server.")),
          error: (e: HttpErrorResponse) => console.error("SERVIZIO:", e.message),
        })
      )
  }

  nuovoArticolo(model: NuovoArticoloDto): Observable<Articolo> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    }

    return this.http.post<Articolo>(environment.JSON_SERVER_BASE_URL + "/articoli", model, httpOptions);
  }

  getArticoloById(id: number): Observable<Articolo> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    }

    return this.http.get<Articolo>(environment.JSON_SERVER_BASE_URL + "/articoli/" + id, httpOptions);
  }

  deleteArticoloById(id: number): Observable<Articolo> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    }

    return this.http.delete<Articolo>(environment.JSON_SERVER_BASE_URL + "/articoli/" + id, httpOptions);
  }
}
