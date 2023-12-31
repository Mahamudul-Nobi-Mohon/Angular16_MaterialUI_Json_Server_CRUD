import { Component, OnInit ,Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Course } from 'src/app/model/data/course';
import { Trainee } from 'src/app/model/data/trainee';
import { baseUrl } from 'src/app/model/shared/app-constants';
import { TraineeInputModels } from 'src/app/model/view-models/Input/trainee-input-models';
import { CourseService } from 'src/app/service/data/course.service';
import { TraineeService } from 'src/app/service/data/trainee.service';
import { NotifyService } from 'src/app/service/shared/notify.service';

@Component({
  selector: 'app-trainee-edit',
  templateUrl: './trainee-edit.component.html',
  styleUrls: ['./trainee-edit.component.scss']
})
export class TraineeEditComponent implements OnInit 
{

  trainee:Trainee= null!;
  imgPath:string= baseUrl;
  course:Course[] = [];
  courseRec : any;
  

   

  traineeForm:FormGroup= new FormGroup({
    courseID: new FormControl(undefined, Validators.required),
    traineeName: new FormControl(undefined, Validators.required),
    traineeAddress: new FormControl(undefined, Validators.required),
    email:new FormControl(undefined, Validators.required),
    birthDate:new FormControl(undefined, Validators.required),
    isRunning:new FormControl(undefined),
    picture: new FormControl(undefined, Validators.required)
    });
  
    file: File = null!;
    constructor(@Inject(DOCUMENT) document: Document,
      private traineeService: TraineeService,
      private courseService:CourseService,
      private notifyService:NotifyService,
      private activatedRoute:ActivatedRoute 

    ){}
    handleFileInputChange(event: any): void {
      if (event.target.files.length) {
        this.file = event.target.files[0];
        this.traineeForm.controls['picture'].patchValue(this.file.name);
      }
      else {
        this.traineeForm.controls['picture'].patchValue("");
      }
      
    }

    setCourseName(event: any){
      this.trainee.courseName = event.source.triggerValue;
       console.log(event.value);
      console.log(event.source.triggerValue);
      
    } 
      
   getCourseById(id: any){ 
   // let id:any= this.trainee.courseID; 
    this.courseService.getById(id)
    .subscribe({
      next: r=> { 
        //this.courseRec=r;
        this.trainee.courseName = r.courseName;
        console.log(r.courseName);  
      },
      error: err=>{
        this.notifyService.message('Failed to load customer data', 'DISMISS');
        throwError(()=>err);
      }
    })
   }
     

    save(){
      if(this.traineeForm.invalid) return;
      let _self = this;
       Object.assign(this.trainee, this.traineeForm.value);
       console.log(this.trainee);
       let data:TraineeInputModels = {id:this.trainee.id, traineeName: this.trainee.traineeName,traineeAddress: this.trainee.traineeAddress, birthDate:this.trainee.birthDate,email:this.trainee.email,  
        courseID:this.trainee.courseID, courseName: this.trainee.courseName};
       this.traineeService.update(data)
       .subscribe({
        next: r=>{
          this.notifyService.message("Trainee  updated", "DISMISS");
          if(this.file){
           _self. updateImage();
          }
        }
       })
    }
    updateImage(){
      let _self = this;
      var reader = new FileReader();
          
          reader.onload = function (e: any) {
           _self.traineeService.uploadImage(<number>_self.trainee.id, _self.file)
           .subscribe({
            next:r=>{
              _self.notifyService.message("Picture updated", "DISMISS");
            },
            error: err=>{
              _self.notifyService.message("Picture update failed", "DISMISS");
              throwError(()=>err);
            }
           })
          }
          reader.readAsArrayBuffer(_self.file);
    }
  ngOnInit(): void {
    
    let id:number = this.activatedRoute.snapshot.params['id'];
    this.traineeService.getById(id)
    .subscribe({
      next: r=>{
        this.trainee=r;
        this.traineeForm.patchValue(this.trainee)
       // console.log(this.trainee)
        this.getCourseById(this.trainee.courseID);
      },
      error: err=> {
        this.notifyService.message('Failed to load tourist data', 'DISMISS')
        throwError(()=>err);
      } 
    });

    this.courseService.get()
    .subscribe({
      next: r=>{
        this.course = r;
      },
      error: err=>{
        this.notifyService.message("Failed to load trainees", 'DISMISS');
      }

      
    }); 
  }
}
