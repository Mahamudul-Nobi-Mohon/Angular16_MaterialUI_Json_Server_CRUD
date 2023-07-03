import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/data/course';
import { apiUrl } from 'src/app/model/shared/app-constants';
import { CourseViewModels } from 'src/app/model/view-models/course-view-models';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http:HttpClient
  ) { }
   get():Observable<Course[]>{
    return this.http.get<Course[]>(`${apiUrl}/Courses`);
  } 
  getVM():Observable<CourseViewModels[]>{
    return this.http.get<CourseViewModels[]>(`${apiUrl}/Courses`);
  } 
  getById(id:number):Observable<Course>{
    return this.http.get<Course>(`${apiUrl}/Courses/${id}`);
  } 
  insert(data:Course):Observable<Course>{
    console.log(data);
    return this.http.post<Course>(`${apiUrl}/Courses`, data);
  } 
  update(data:Course):Observable<any>{
    return this.http.put<any>(`${apiUrl}/Courses/${data.id}`, data);
  } 
  delete(data:Course):Observable<any>{
    return this.http.delete<any>(`${apiUrl}/Courses/${data.id}`);
  }

}