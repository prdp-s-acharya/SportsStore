import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageStrategy, SessionStorageStrategy } from 'ngx-webstorage';
import { order } from 'src/shared/Model/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  placedorder:order = new order();
  sum = 0;
  form!: FormGroup;
  constructor(
    public localstratergy:LocalStorageStrategy,
    public sessionstratergy:SessionStorageStrategy
  ) { }

  ngOnInit(): void {
    this.localstratergy.get("cart").subscribe(res=>{
      this.placedorder.item = res
      console.log(this.placedorder);
    })

    this.sessionstratergy.get("user").subscribe(res=>{
      this.placedorder.customer = res;
      console.log(res);
    })

    this.totalprice();
 
    this.form = new FormGroup({
      dateoforder: new FormControl('', [Validators.required]),
      paymentmethod: new FormControl(''),
    });
  }

  submit(){
    this.placedorder.orderDate = this.form.value.dateoforder;
    console.log(this.placedorder.orderDate);
    this.placedorder.paymentMode = this.form.value.paymentmethod;
    console.log(this.placedorder.paymentMode);
  }

  totalprice(){
    this.placedorder.item.forEach(element => {
      this.sum += element.price;
    });
  }

}
