import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  currentPage = 0;

  constructor(private ps: PokemonsService) {

  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.ps.search(3, this.currentPage + 1).subscribe(dati => {
      this.pokemons.push(...dati.data);
      this.currentPage = dati.page;
    });
  }

  somma(n1: number, n2: number) {
    return n1 + n2;
  }

  sommaMultimpla(...numeri: number[]) {
    let r = 0;

    for (const n of numeri) {
      r += n;
    }

    return r;
  }
}
