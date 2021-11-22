import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageStrategy } from 'ngx-webstorage';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(
    public router:Router,
    public Strategy:SessionStorageStrategy
  ) { }

  ngOnInit(): void {
    
  }
  submit(value:any){
      console.log(value);
      this.Strategy.set("admin",value);
      if(value.username == "admin" && value.password == "admin"){
        console.log(value);
        //this.Strategy.set("admin",value);
        this.router.navigateByUrl("/customer/index");  
      }  
      else{
        alert('inavalid credentials')
      }
    }
}
