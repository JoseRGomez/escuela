import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { profesores } from '../interfaces/profesores.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  // Profesores
  private apiURLProfesores = 'http://hp-api.herokuapp.com/api/characters/staff';
  constructor(private http: HttpClient) { }
  
    getProfesores():Observable<any> {
      return this.http.get<profesores[]>(this.apiURLProfesores);
  }
  
}
