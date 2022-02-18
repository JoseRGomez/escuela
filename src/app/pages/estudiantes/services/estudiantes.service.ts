import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { estudiantes } from '../interfaces/estudiantes.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  // estudiantes
  private apiURLEstudiante = 'http://hp-api.herokuapp.com/api/characters/students';

  constructor(private http: HttpClient) { }

  getEstudiantes():Observable<any> {
    return this.http.get<estudiantes[]>(this.apiURLEstudiante);
  }

}

