import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';

import { AdminFormComponent } from './admin-form/admin-form.component';
import { HomeComponent } from './home/home.component';
import { SLoginformComponent } from './s-loginform/s-loginform.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import {NgForm} from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { NewTimetableComponent } from './new-timetable/new-timetable.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherUploadComponent } from './teacher-upload/teacher-upload.component';
import { UploadAssigComponent } from './upload-assig/upload-assig.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { UploadAttendComponent } from './upload-attend/upload-attend.component';
import { STimetableComponent } from './s-timetable/s-timetable.component';
import { SResultComponent } from './s-result/s-result.component';
import { SAssigComponent } from './s-assig/s-assig.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '',   redirectTo: '/sloginform', pathMatch: 'full' },
  { path : 'sloginform' , component : SLoginformComponent },
  { path :'studentpage' , component : StudentpageComponent,
       children:[
        {path:'s-timetable' , component : STimetableComponent},
        {path:'s-result' , component: SResultComponent},
        {path : 's-assig' , component: SAssigComponent}
       ]
  },
  {path: 'home' , component : HomeComponent},
  {
    path: 'adminlogin' , component : AdminFormComponent , 
    children:[
    {path: 'add-user' , component : AddUserComponent},
    {path: 'view-user', component : ViewUserComponent},
    {path: 'time-table', component: TimeTableComponent,
       children:[
        {path : 'new-timetable' , component : NewTimetableComponent}
       ]
     
     }
      ]
  },
  
  {path: 'teacherpage' , component: TeacherpageComponent , 
    children: [
      {path: 'student-list' , component: StudentListComponent},
      {path: 'teacher-upload', component : TeacherUploadComponent,
       children: [
        {path : 'upload-assig' , component : UploadAssigComponent},
        {path : 'upload-attend' , component: UploadAttendComponent},
        {path : 'upload-result' , component: UploadResultComponent}
       ]
      }
    ]
   },
   { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }