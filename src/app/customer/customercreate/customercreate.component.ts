import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})
export class CustomercreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    public service: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe(res => {
        console.log('Post created successfully!');
        this.router.navigateByUrl('customer/index');
  
    })
  
  }
}
