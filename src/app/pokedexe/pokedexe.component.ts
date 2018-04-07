import { Component, OnInit } from '@angular/core';


import {PokeServiceService} from '../pokeService/poke-service.service';
@Component({
  selector: 'app-pokedexe',
  templateUrl: './pokedexe.component.html',
  styleUrls: ['./pokedexe.component.css'],
  providers: [PokeServiceService],
  styles: ['li { font-weight: normal; }']
})
export class PokedexeComponent implements OnInit {
  private pokemons: any ;
  private pokemon: any ;
  constructor(private pokeService: PokeServiceService) {}

  ngOnInit() {
   // this.getAll();
  //  this.getOne();
  }
  getAll() {
    this.pokeService.getPokemons().subscribe(
      data => this.pokemons = data,
      err => console.log(err),
      () => console.log('fetched correctly')
    );
  }
  getOne() {
    this.pokeService.getPokemon('https://pokeapi.co/api/v2/pokemon/1').subscribe(
      data => {
        this.pokemon = data;
        this.getDescription(this.pokemon.species.url);
      },
      err => console.log(err),
      () => console.log('fetched correctly22')
    );
  }

  getDescription(url) {
    this.pokeService.getPokemon(url).subscribe(
      data => {
        this.pokemon.description = data;
      },
      err => console.log(err),
      () => console.log('fetched correctly'),
    );
  }
}
