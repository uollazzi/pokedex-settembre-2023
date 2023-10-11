import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

export function gestisciErrore<T>(operazione: string, risultato?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
    console.log(operazione, error.message);

    return of(risultato as T);
  }
}
