import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  exports: [MatToolbarModule, 
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ]
})

export class MaterialModule {}