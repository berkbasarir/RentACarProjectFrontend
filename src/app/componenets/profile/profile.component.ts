import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  customer: Customer;
  customerUpdateForm: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCustomer();
    this.createCustomerUpdateForm();
  }

  getCustomer() {
    this.customer = this.localStorageService.getCurrentCustomer();
  }

  createCustomerUpdateForm() {
    this.customerUpdateForm = this.formBuilder.group({
      id: [this.customer.id, Validators.required],
      userId: [this.customer.userId, Validators.required],
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      companyName: [this.customer.companyName],
      email: [this.customer.email, [Validators.required, Validators.email]],
      password: [''],
      confirmPassword: [''],
    });
  }

  update() {
    if (!this.customerUpdateForm.valid) {
      this.toastrService.warning('Lütfen boş bilgi bırakmayın', 'Dikkat');
      return;
    }

    if (
      this.customerUpdateForm.value['password'] !=
      this.customerUpdateForm.value['confirmPassword']
    ) {
      this.toastrService.warning('Şifreler uyuşmuyor', 'Dikkat');
      return;
    }

    delete this.customerUpdateForm.value['confirmPassword'];
    let customer: Customer = Object.assign({}, this.customerUpdateForm.value);

    this.authService.update(customer).subscribe(
      (responseSuccess) => {
        this.localStorageService.removeCurrentCustomer();
        delete customer.password;
        this.localStorageService.setCurrentCustomer(customer);
        return this.toastrService.success(responseSuccess.message, 'Başarılı');
      },
      (responseError) => {
        if (responseError.error.ValidationErrors.length == 0) {
          this.toastrService.error(
            responseError.error.Message,
            responseError.error.StatusCode
          );
          return;
        }

        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(
            responseError.error.ValidationErrors[i].ErrorMessage,
            'Doğrulama Hatası'
          );
        }
      }
    );
  }

  getYear() {
    return new Date().getFullYear();
  }
}
