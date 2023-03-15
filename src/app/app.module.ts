import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { CreateRecordComponent } from './records/create-record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordService } from './services/record.service';
import { RecordListComponent } from './record-list/record-list.component';
import { AttributeService } from './services/attribute.service';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateRecordComponent,
    RecordListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [RecordService, AttributeService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
