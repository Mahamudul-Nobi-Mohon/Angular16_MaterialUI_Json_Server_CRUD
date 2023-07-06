 
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/model/data/Country';
import { State } from 'src/app/model/data/State';
import { Trainee } from 'src/app/model/data/trainee';
import { CountryService } from 'src/app/service/data/country.service';
import { TraineeService } from 'src/app/service/data/trainee.service';
import { NotifyService } from 'src/app/service/shared/notify.service';

import { baseUrl } from 'src/app/model/shared/app-constants';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.scss']
})
export class CascadingDropdownComponent implements OnInit {
 // trainee:Trainee = {courseID:undefined, traineeName:undefined, traineeAddress:undefined, birthDate:undefined, email:undefined, isRunning:undefined}
  country:Country[] = [];
  state : any = [];
  imgPath:string= baseUrl;
  cascadingForm:FormGroup= new FormGroup({
    countryID: new FormControl(undefined, Validators.required),
    stateID: new FormControl(undefined, Validators.required) 
  });
  // file: File = null!;
  // handleFileInputChange(event: any): void {
  //   if (event.target.files.length) {
  //     this.file = event.target.files[0];
  //     this.traineeForm.controls['picture'].patchValue(this.file.name);
  //   }
  //   else {
  //     this.traineeForm.controls['picture'].patchValue("");
  //   }
    
  // }

  setCountryName(event: any){ 
    this.countryService.getStateByCountryId(event.value)
    .subscribe({
      next: r=>{
        this.state = r;
    console.log(event.source.triggerValue);
      },
      error: err=>{
        this.notifyService.message("Failed to load State", 'DISMISS');
      }
    });
    
    
  }

  
  constructor(
    //private traineeService: TraineeService,
    private countryService:CountryService,
    private notifyService:NotifyService
  ) { }
  ngOnInit(): void {
    this.countryService.get()
    .subscribe({
      next: r=>{
        this.country = r;
        console.log(r);
      },
      error: err=>{
        this.notifyService.message("Failed to load Country", 'DISMISS');
      }
    });
   
  }

  
}


  
