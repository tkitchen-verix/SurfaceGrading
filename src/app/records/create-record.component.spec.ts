import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Record } from "../data/record";
import { AttributeService } from "../services/attribute.service";
import { RecordService } from "../services/record.service";
import { CreateRecordComponent } from "./create-record.component";

describe("CreateRecordComponent", async() => {

  let createRecordComponent: CreateRecordComponent;
  let fixture: ComponentFixture<CreateRecordComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RecordService, AttributeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordComponent);
    createRecordComponent = fixture.componentInstance;
    fixture.detectChanges();
  })

  it("should define a CreateRecordComponent", waitForAsync(() => {
      expect(createRecordComponent).toBeDefined();
  }));

  // TODO: Extend this spec with any tests you feel will increase coverage for the component

  it("isAdding should be false on init", waitForAsync(() => {
    expect(createRecordComponent.isAdding).toBeFalse();
  }));

  it("newRecord should not be defined on init", waitForAsync(() => {
    expect(createRecordComponent.newRecord).toBeUndefined();
  }));

  it("should receive nextId of 3 from attribute service", waitForAsync(() => {
    expect(createRecordComponent.nextId).toEqual(3);
  }));

  it("should receive grade list from attribute service", waitForAsync(() => {

    expect(createRecordComponent.grades).toBeDefined();
  }));

  it("should receive surfaceType list from attribute service", waitForAsync(() => {
    expect(createRecordComponent.surfaceTypes).toBeDefined();
  }));

  it("should create a new record object when showAddForm is called", waitForAsync(() => {
    createRecordComponent.showAddForm();
    expect(createRecordComponent.newRecord).toBeDefined();
  }));

  it("should set isAdding to true when showAddForm is called", waitForAsync(() => {
    createRecordComponent.showAddForm();
    expect(createRecordComponent.isAdding).toBeTrue();
  }));

  it("should display the create record form when showAddForm is called", waitForAsync(() => {
    createRecordComponent.showAddForm();
    var form = fixture.debugElement.query(By.css("#add-record-form"));
    expect(form).toBeDefined();
  }));

  it("should not display the create record button when showAddForm is called", waitForAsync(() => {
    createRecordComponent.showAddForm();
    var btn = fixture.debugElement.query(By.css("#add-record-button"));
    expect(btn).toBeNull();
  }));

  it("should display the create record button before showAddForm is called", waitForAsync(() => {
    var btn = fixture.debugElement.query(By.css("#add-record-button"));
    expect(btn).toBeDefined();
  }));

  it("should not display the create record  before showAddForm is called", waitForAsync(() => {
    createRecordComponent.showAddForm();
    var form = fixture.debugElement.query(By.css("#add-record-form"));
    expect(form).toBeNull();
  }));

  it("should receive the updated nextId when submitting a new record", waitForAsync(() => {
    expect(createRecordComponent.nextId).toEqual(3);
    createRecordComponent.newRecord = new Record(createRecordComponent.nextId,4532,1)
    createRecordComponent.submit();
    expect(createRecordComponent.nextId).toEqual(4);
  }));

});
