import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from '../data/grade';
import { SurfaceType } from '../data/surface-type';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  grades: Array<Grade>;
  surfaceTypes: Array<SurfaceType>;

  _grades: BehaviorSubject<Array<Grade>>;
  _surfaceTypes: BehaviorSubject<Array<SurfaceType>>;

  grades$: Observable<Array<Grade>>;
  surfaceTypes$: Observable<Array<SurfaceType>>;

  constructor(private readonly http: HttpClient) {
    // making the assumption that these will remain static, so they are set at initialization to limit calls to backend/files
    // we could call for them each time should there be the chance of them being altered
    this.getGrades();
    this.getSurfaceTypes();
  }

  getGrades() {
    this._grades = new BehaviorSubject(new Array<Grade>())
    this.grades$ = this._grades.asObservable();
    this.http.get<Array<Grade>>("assets/grades.json").subscribe((grades: Array<Grade>) => {
      this.grades = grades;
      this._grades.next(this.grades);
    });
  }

  getSurfaceTypes() {
    this._surfaceTypes = new BehaviorSubject(new Array<SurfaceType>());
    this.surfaceTypes$ = this._surfaceTypes.asObservable();
    this.http.get<Array<SurfaceType>>("assets/surfacetypes.json").subscribe((surfaceTypes: Array<SurfaceType>) => {
      this.surfaceTypes = surfaceTypes;
      this._surfaceTypes.next(this.surfaceTypes)
    });
  }

}
