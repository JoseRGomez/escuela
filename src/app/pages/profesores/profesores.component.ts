import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { profesores } from './interfaces/profesores.interfaces';
import { ProfesoresService } from './services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  profesores!: profesores[]

  constructor(private profesoresSvc: ProfesoresService) { }

  ngOnInit(): void {
    this.profesoresSvc.getProfesores()
    .pipe(
      tap((profesores: profesores[]) => this.profesores = profesores)
    )
    .subscribe();
  }
}
