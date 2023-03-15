import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const _MODULES = [
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule
];

@NgModule({
  imports: [..._MODULES],
  exports: [..._MODULES]
})
export class AngularMaterialModule { }
