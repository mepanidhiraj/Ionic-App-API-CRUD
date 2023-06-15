import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, first } from 'rxjs';
import { endpoints } from 'src/app/endpoints/endpoints'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user = []
  
  constructor(private http: HttpClient,) { }


  get_data(): Observable<any> {
    return this.http.get(environment.api_url + endpoints.get());
  }


  add_data(user: any) {

    let headers = new HttpHeaders()
      // .set('Accept', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', '*')
      .set('Access-Control-Allow-Methods', '*')
    // .set('Access-Control-Allow-Credentials', 'true');

    let url = environment.api_url + endpoints.insert();

    // console.log(url);
    // console.log(data);
    // console.log(data['name']);
    // console.log(data['department']);
    

    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });

    // console.log("body :- ",body)
    console.log("Api Url :- ",url)

    return this.http.post(url,user);

  }

  edit_data(user: any) {

    let headers = new HttpHeaders()
      // .set('Accept', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', '*')
      .set('Access-Control-Allow-Methods', '*')
    // .set('Access-Control-Allow-Credentials', 'true');

    let url = environment.api_url + endpoints.update(user.id);

    // console.log(url);
    // console.log(data);
    // console.log(data['name']);
    // console.log(data['department']);
    

    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });

    // console.log("body :- ",body)
    console.log("Api Url :- ",url)

    return this.http.put(url,user);

  }

  del_data(user: any) {

    let url = environment.api_url + endpoints.delete(user.id);

    console.log("Api Url :- ",url)

    return this.http.delete(url,user);

  }


}
