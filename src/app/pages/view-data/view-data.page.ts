import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.page.html',
  styleUrls: ['./view-data.page.scss'],
})
export class ViewDataPage implements OnInit {

  constructor(private apiServices : ApiService) { }

  ngOnInit() {

   this.apiServices.get_data().pipe(first()).subscribe((res) =>{
    console.log('res :- ', res)
   });
    
  }

  

}
