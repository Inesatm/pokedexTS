import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokedexeComponent } from './pokedexe/pokedexe.component';
import {PokeServiceService} from './pokeService/poke-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Configuration } from './conf/configuration';




@NgModule({
  declarations: [
    AppComponent,
    PokedexeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PokeServiceService, HttpClient, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
