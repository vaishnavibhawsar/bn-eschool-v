import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { SLoginformComponent } from './s-loginform/s-loginform.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { SharedService  } from "./shared.service";

import { HomeComponent } from './home/home.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { NewTimetableComponent } from './new-timetable/new-timetable.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherUploadComponent } from './teacher-upload/teacher-upload.component';
import { SearchPipe } from './search.pipe';
import { UploadAssigComponent } from './upload-assig/upload-assig.component';
import { UploadAttendComponent } from './upload-attend/upload-attend.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { STimetableComponent } from './s-timetable/s-timetable.component';
import { SResultComponent } from './s-result/s-result.component';
import { SAssigComponent } from './s-assig/s-assig.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SLoginformComponent,
    AdminFormComponent,
    HomeComponent,
    StudentpageComponent,
    TeacherpageComponent,
    TodosComponent,
    AddUserComponent,
    ViewUserComponent,
    TimeTableComponent,
    NewTimetableComponent,
    StudentListComponent,
    TeacherUploadComponent,
    SearchPipe,
    UploadAssigComponent,
    UploadAttendComponent,
    UploadResultComponent,
    STimetableComponent,
    SResultComponent,
    SAssigComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
