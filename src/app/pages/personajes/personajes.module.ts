import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { MaterialModule } from 'src/app/material.module';
import { SelecthouseComponent } from './selecthouse/selecthouse.component';

@NgModule({
  declarations: [
    PersonajesComponent,
    SelecthouseComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule
  ]
})
export class PersonajesModule { }
