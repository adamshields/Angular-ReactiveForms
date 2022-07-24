import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.customerForm = this.fb.group({
      firstName: '',
      // lastName: {value: 'n/a', disabled: true}, // show how to disable form while passing value if na
      lastName: {value: 'n/a', disabled: true},
      email: '',
      sendCatalog: true,
    })

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true),
    // });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Shields',
      // email: 'adam@gmail.com',
      sendCatalog: false
    });
  }

  save () {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
