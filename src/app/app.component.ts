import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ApiService } from './api.service';
import { Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pwademo';
  items:any[] = [];
  pageIndex = 0;
  pageTotal:number;
  perPage:number;
  pageEvent: PageEvent;

  constructor(private apiService: ApiService){

  }
  ngOnInit(){    
    //this.fetchData(this.pageIndex+1);
  }
  
}
