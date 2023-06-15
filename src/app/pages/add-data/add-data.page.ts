import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {

  name: any;
  department: any;

  user: any;
  loadDATA :any;
  constructor(private apiServices: ApiService, private http: HttpClient, private router: Router) { }



  ngOnInit() {

  }
  
  SaveAsdraft() {
    console.log("-: SaveAsdraft :- ");
    console.log("Name :- ", this.name);
    console.log("Department :- ", this.department);

    this.user = {
      "name" : this.name,
      "department" : this.department,
    }

    // localStorage.setItem("User" , this.user);

    // console.log(this.user)


  }


  insertDATA() {
    // alert("Insert");
    console.log(this.name)
    console.log(this.department)

    let user = {
      "name": this.name,
      "department": this.department
    }


    this.apiServices.add_data(user).subscribe((res) => {
      console.log("Insert :- ", res)
      this.router.navigateByUrl("home")
    });

  }

}
