import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    })
  }

 register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value) 
      this.authService.register(registerModel).subscribe(response => {
        this.toastrService.success("Succes", response.message)
        this.router.navigate(["login"])
      }, responseError => {
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama Hatası") 
          }
        }      
      })
    }else{
      this.toastrService.error("Validation Error")
    }
  }

}
