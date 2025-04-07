import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url :any;

  constructor(private http : HttpClient) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get("https://fakestoreapi.com/products").subscribe((data)=>{
      console.log(data);
      const Basedata = data;
    })
  }
}
