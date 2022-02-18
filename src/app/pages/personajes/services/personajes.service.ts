import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { personajes } from '../interfaces/personajes.interfaces';

// Enlace a la base de datos personajes //
// ------------------------------------ //

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  // Personajes
  private apiURL = 'http://hp-api.herokuapp.com/api/characters';
    
  constructor(private http: HttpClient) { }

  getPersonajes():Observable<any> {
    return this.http.get<personajes[]>(this.apiURL);
  }

}
