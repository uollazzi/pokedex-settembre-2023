import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path: "pokemons",
  //   component: PokemonsListComponent
  // },
  // {
  //   path: "pokemons/:codice",
  //   component: PokemonDetailComponent
  // },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "pokemons",
    component: PokemonsComponent,
    children: [
      { path: "", component: PokemonsListComponent },
      { path: ":codice", component: PokemonDetailComponent }
    ]
  },
  {
    path: "blog",
    component: BlogComponent,
    children: [
      { path: "", component: ArticoliListComponent },
      { path: "nuovo", component: ArticoloAddComponent },
      { path: ":id", component: ArticoloDetailComponent }
    ]
  },
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
