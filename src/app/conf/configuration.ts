import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'https://pokeapi.co/api/v2/';
  public ApiUrl = 'pokemon/';
  public ServerWithApiUrl = this.Server + this.ApiUrl + '?limit=900';
}
