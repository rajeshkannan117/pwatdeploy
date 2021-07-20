import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item{
  first_name: string;
  last_name: string;
  avatar: string;
  html: string;
  markdown: string;
}
export interface Datas{
  data:Item[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dataURL: string = "https://reqres.in/api/users?page="; 
  constructor(private httpClient: HttpClient) {

  }

  fetch(page){
    return this.httpClient.get(this.dataURL+page);
  }
}
