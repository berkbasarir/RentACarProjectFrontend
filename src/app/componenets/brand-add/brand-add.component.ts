import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm : FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private brandService:BrandService,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name:["",Validators.required],      
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value) 
      console.log(brandModel)
      this.brandService.add(brandModel).subscribe(response => {
        console.log(response)
        this.toastrService.success("Succes", response.message)
      })
    }else{
      this.toastrService.error("Validation Error")
    }
  }

}
