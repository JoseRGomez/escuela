import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { personajes } from './interfaces/personajes.interfaces';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  personajes!: personajes[];

  constructor(private personajesSvc: PersonajesService) { }

  ngOnInit(): void {
    this.personajesSvc.getPersonajes()
    .pipe(
      tap(
        (personajes: personajes[]) => this.personajes = personajes,
        (displayedColumns=> ['name','patronus','age','image'])
      
      )
    )
    .subscribe();
  }
}
