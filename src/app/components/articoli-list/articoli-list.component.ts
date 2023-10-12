import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Articolo } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent implements OnInit {
  articoli: Articolo[] = [];
  errorMessage = "";

  constructor(private bs: BlogService) {

  }

  ngOnInit(): void {
    // this.bs.getArticoli().subscribe(articoli => {
    //   if (articoli instanceof Error) {
    //     console.error("ERRORE:", articoli);
    //   } else {
    //     console.log(articoli)
    //   }
    // });

    // this.bs.getArticoli()
    //   .pipe(
    //     catchError((err: HttpErrorResponse) => {
    //       this.errorMessage = err.error;

    //       return of([])
    //     })
    //   )
    //   .subscribe(articoli => {
    //     this.articoli = articoli;
    //   });

    this.bs.getArticoli().subscribe({
      next: articoli => this.articoli = articoli,
      error: (err: HttpErrorResponse) => this.errorMessage = err.error
    })
  }
}
