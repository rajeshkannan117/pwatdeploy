import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:any[] = [];
  pageIndex = 0;
  pageTotal:number;
  perPage:number;
  pageEvent: PageEvent;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData(this.pageIndex);
  }
  fetchData(page){
    this.apiService.fetch(page).subscribe((data:any)=>{
      console.log(data);
      this.pageTotal = data.total;
      this.perPage = data.per_page;
      this.items = data.data;
      console.log(this.items);
    }, (err)=>{
      console.log(err);
    });
  }
  public getServerData(event?:PageEvent){
    this.fetchData(event.pageIndex+1);
    console.log(event);
  }
}
