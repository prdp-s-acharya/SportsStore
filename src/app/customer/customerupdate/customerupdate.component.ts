import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/shared/Model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {

  id!:number;
  form!: FormGroup;
  customer!:customer

  constructor(
    public customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.find(this.id).subscribe((data: customer)=>{
      this.customer = data;
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),

    });
  }
  submit(){
    console.log(this.form.value); 
    this.customerService.update(this.id, this.form.value).subscribe(res => { 
         console.log('customer updated successfully!'); 
         this.router.navigateByUrl('customer/index'); 
    })

  }

}
