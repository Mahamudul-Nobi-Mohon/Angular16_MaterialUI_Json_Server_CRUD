import { Component,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent { 

    constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
      private toastr: ToastrService) {
  
    }

    productlist: any;
    dataSource: any;
    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
    productRegisterForm = this.builder.group({
      id: this.builder.control('', Validators.required),
      name: this.builder.control('', Validators.required),
      unitPrice: this.builder.control('', Validators.required)
    });
    save() {
      if (this.productRegisterForm.valid) {
        this.service.RegisterProduct(this.productRegisterForm.value).subscribe(result => {
          this.toastr.success('Success','Registered successfully')
          //this.router.navigate(['login'])
        });
      } else {
        this.toastr.warning('Please enter valid data.')
      }
    }
  
    addProductToList(){
      this.LoadProduct();
    }
    LoadProduct() {
      this.service.GetallProducts().subscribe(res => {
        this.productlist = res;
        this.dataSource = new MatTableDataSource(this.productlist);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }