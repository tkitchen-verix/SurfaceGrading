import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RecordService } from '../services/record.service';
import { Record } from "../data/record";
import { AttributeService } from '../services/attribute.service';
import { SurfaceType } from '../data/surface-type';
import { Grade } from '../data/grade';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit, OnDestroy {

  records: Array<Record>;
  surfaceTypes: Array<SurfaceType>;
  grades: Array<Grade>;

  datasource: DataSource<Record>;

  displayedColumns: string[] = ['id', 'surfaceTypeId', 'surfaceType', 'gradeId', 'grade', 'action'];

  @ViewChild(MatTable) table: MatTable<Record>;

  constructor(
    private readonly recordService: RecordService,
    private readonly attributeService: AttributeService)
  {

  }


  ngOnInit(): void {

    this.attributeService.grades$.subscribe((result: Array<Grade>) => {
       this.grades = result;
    });

    this.attributeService.surfaceTypes$.subscribe((result: Array<SurfaceType>) => {
      this.surfaceTypes = result
    });
    this.recordService.records$.subscribe((records: Array<Record>) => {
      this.records = records;
      if(this.table !== undefined) {
        this.table.renderRows();
      }
    });
  }
  ngOnDestroy(): void {
  }
  emptyList(): void {
    this.recordService.clearRecords();
  }

  resetList(): void {
    this.recordService.resetRecords();
  }

  deleteRecord(id: number) {
    this.recordService.deleteRecord(id);
  }

  getSurfaceTypeName(id: number): string {
    var name = "N/A";
    this.surfaceTypes.forEach((t, i) => {
      if(t.id === id) {
        name = this.surfaceTypes[i].name;
      }
    });
    return name;
  }

  getGradeNameAndDescription(id: number): string {
    var name= "N/A";
    this.grades.forEach((t, i) => {
      if(t.id === id) {
        name = `${this.grades[i].name} | ${this.grades[i].description}` ;
      }
    });
    return name;
  }

}
