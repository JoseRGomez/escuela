import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { estudiantes } from './interfaces/estudiantes.interface';
import { EstudiantesService } from './services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  estudiantes!: estudiantes[];

  constructor(private estudiantesSvc: EstudiantesService) { }

  ngOnInit(): void {
    this.estudiantesSvc.getEstudiantes()
    .pipe(
      tap((estudiantes: estudiantes[]) => this.estudiantes = estudiantes)
    )
    .subscribe();
  }
}
