import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { customer } from 'src/shared/Model/customer';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  customers!:customer []
  constructor(
    public customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data=>{
      this.customers = data;
      console.log(this.customers);
    })
    
  }

}
