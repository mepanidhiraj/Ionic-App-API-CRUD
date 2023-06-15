import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-del-data',
  templateUrl: './del-data.page.html',
  styleUrls: ['./del-data.page.scss'],
})
export class DelDataPage implements OnInit {

  id: any

  constructor(private apiServices: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }


  deleted_DATA() {
    let user = {
      "id": this.id,
    }


    this.apiServices.del_data(user).subscribe((res) => {
      console.log("Deleted :- ", res)
      this.router.navigateByUrl("home")
    });
  }
}
