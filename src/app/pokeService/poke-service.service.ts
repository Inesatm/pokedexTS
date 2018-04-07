import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../conf/configuration';

@Injectable()
export class PokeServiceService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;
  }
  public getPokemons<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

  public getPokemon<T>(url: string): Observable<T> {
   // return this.http.get<T>(this.actionUrl + id);
    return this.http.get<T>(url);
  }
}
