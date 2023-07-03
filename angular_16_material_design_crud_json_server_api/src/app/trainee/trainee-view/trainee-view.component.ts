import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { apiUrl, baseUrl } from 'src/app/model/shared/app-constants';
import { TraineeViewModels } from 'src/app/model/view-models/trainee-view-models';
import { NotifyService } from 'src/app/service/shared/notify.service';
import { TraineeService } from 'src/app/service/data/trainee.service';
import { ConfirmDialogComponent } from '../../common/confirm-dialog/confirm-dialog.component';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-trainee-view',
  templateUrl: './trainee-view.component.html',
  styleUrls: ['./trainee-view.component.scss']
})
export class TraineeViewComponent implements OnInit {
  picPath:string = `${baseUrl}/Pictures`
  trainees:TraineeViewModels[] =[];
  dataSource:MatTableDataSource<TraineeViewModels> = new MatTableDataSource(this.trainees)
  columns:string[] =['picture','courseName','traineeName', 'traineeAddress', 'email','birthDate','isRunning', 'actions'];
  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;
  constructor(
    private traineeService:TraineeService,
    private notifyService:NotifyService,
    private matDialog:MatDialog 
   
  ) { }
  confirmDelete(data:TraineeViewModels){
    //console.log(data);
    this.matDialog.open(ConfirmDialogComponent, {
      width: '450px',
      enterAnimationDuration: '500ms'
    }).afterClosed()
    .subscribe((result: any)=>{
      //console.log(result);
      if(result){
        this.traineeService.delete(data)
        .subscribe({
          next: r=>{
            this.notifyService.message('Trainee removed', 'DISMISS');
            this.dataSource.data = this.dataSource.data.filter(c => c.id != data.id);
          },
          error:(err: any)=>{
            this.notifyService.message('Failed to delete data', 'DISMISS');
            throwError(()=>err);
          }
        })
      }
    })
  }
  ngOnInit(): void {
    this.traineeService.getVM().subscribe({
      next:r=>{
        this.trainees = r;
        this.dataSource.data = this.trainees;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    })
  }

}
