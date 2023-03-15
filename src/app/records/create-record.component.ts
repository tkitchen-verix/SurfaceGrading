import { Component, OnInit } from "@angular/core";
import { Grade } from "../data/grade";
import { SurfaceType } from "../data/surface-type";
import { Record } from "../data/record";
import { RecordService } from "../services/record.service";
import { AttributeService } from "../services/attribute.service";
import { Observable } from "rxjs/internal/Observable";

@Component({
    selector: "app-create-record",
    templateUrl: "./create-record.component.html",
    styleUrls: ["./create-record.component.css"]
})
export class CreateRecordComponent implements OnInit {
    nextId: number;
    isAdding = false;
    newRecord: Record;

    surfaceTypes: Observable<Array<SurfaceType>>;
    grades: Observable<Array<Grade>>;

    constructor(
      private readonly recordService: RecordService,
      private readonly attributeService: AttributeService
      ) {}

    ngOnInit(): void {
      this.recordService.nextId$.subscribe((nextId: number) => {
        this.nextId = nextId;
      })
      this.grades = this.attributeService.grades$;
      this.surfaceTypes = this.attributeService.surfaceTypes$;
    }

    showAddForm(): void {
        this.isAdding = true;
        this.newRecord = new Record(this.nextId, 0, 0);
    }

    submit(): void {
        this.isAdding = false;
        this.recordService.addRecord(this.newRecord);
    }

    // TODO - Update the form to have the fields validated as opposed to this method.
    canSubmit(): boolean {
        if (this.newRecord.surfaceTypeId === 0 || this.newRecord.gradeId === 0) {
            return false;
        }
        return true;
    }
}
