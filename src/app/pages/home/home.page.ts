import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}


  Add_Data() {
    this.router.navigateByUrl("add-data");
  }

  Edit_Data() {
    this.router.navigateByUrl("edit-data");
  }

  Del_Data() {
    this.router.navigateByUrl("del-data");
  }

  View_Data() {
    this.router.navigateByUrl("view-data");
  }

}
