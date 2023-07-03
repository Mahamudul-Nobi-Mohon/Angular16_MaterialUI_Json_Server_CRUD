import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model/data/course';
import { Trainee } from 'src/app/model/data/trainee';
import { CourseService } from 'src/app/service/data/course.service';
import { TraineeService } from 'src/app/service/data/trainee.service';
import { NotifyService } from 'src/app/service/shared/notify.service';

import { baseUrl } from 'src/app/model/shared/app-constants';

@Component({
  selector: 'app-trainee-create',
  templateUrl: './trainee-create.component.html',
  styleUrls: ['./trainee-create.component.scss']
})
export class TraineeCreateComponent implements OnInit {
  trainee:Trainee = {courseID:undefined, traineeName:undefined, traineeAddress:undefined, birthDate:undefined, email:undefined, isRunning:undefined}
  course:Course[] = [];
  imgPath:string= baseUrl;
  traineeForm:FormGroup= new FormGroup({
    courseID: new FormControl(undefined, Validators.required),
    traineeName: new FormControl(undefined, Validators.required),
    traineeAddress: new FormControl(undefined, Validators.required),
    email:new FormControl(undefined, Validators.required),
    birthDate:new FormControl(undefined, Validators.required),
    isRunning:new FormControl(undefined, Validators.required),
    picture: new FormControl(undefined, Validators.required),
    examResults: new FormArray([])
  });
  file: File = null!;
  handleFileInputChange(event: any): void {
    if (event.target.files.length) {
      this.file = event.target.files[0];
      this.traineeForm.controls['picture'].patchValue(this.file.name);
    }
    else {
      this.traineeForm.controls['picture'].patchValue("");
    }
    
  }
  save() {
    if (this.traineeForm.invalid) return;
    Object.assign(this.trainee, this.traineeForm.value)
    console.log(this.trainee);
    var _self = this;
  
    this.traineeService.insert(this.trainee)
    .subscribe({
      next: r => {
        _self.notifyService.message('Data saved', 'DISMISS');
        var file = this.traineeForm.controls['picture'].value.files[0];
        var reader = new FileReader();
        
        reader.onload = function (e: any) {
          console.log(e);
          _self.traineeService.uploadImage(<number>r.id, file)
            .subscribe({
              next: r => {
                _self.notifyService.message('Picture uploaded', 'DISMISS');
              },
              error: err => {
                _self.notifyService.message('Picture upload failed', 'DISMISS');
              }
            });
        }
        reader.readAsArrayBuffer(file);
      },
      error: err => {
      _self.notifyService.message('Failed to save product', 'DISMISS')
      }
    });
  }
  constructor(
    private traineeService: TraineeService,
    private courseService:CourseService,
    private notifyService:NotifyService
  ) { }
  ngOnInit(): void {
    this.courseService.get()
    .subscribe({
      next: r=>{
        this.course = r;
      },
      error: err=>{
        this.notifyService.message("Failed to load customers", 'DISMISS');
      }
    });
   
  }

}


  
