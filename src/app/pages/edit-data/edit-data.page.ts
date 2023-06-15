import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {
  id : any;
  name : any;
  department : any;

  constructor(private apiServices: ApiService, private http: HttpClient,private router:Router) { }


  ngOnInit() {
  }

  EditDATA() {
    // alert("Insert");
    console.log(this.name)
    console.log(this.department)

    let user = {
      "id":this.id,
      "name": this.name,
      "department": this.department
    }

    
    this.apiServices.edit_data(user).subscribe( (res) => {
      console.log("Insert :- ",res)
      this.router.navigateByUrl("home")
    });
  }
}
