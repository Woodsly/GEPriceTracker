import { Inject, Injectable } from '@angular/core';
import { ScapeDBItem } from '../models/scape-db-item';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ScapeItemService {

  endpoint:string = 'api/GeDB'
  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl:string) { }

   getScapeItems(itemId:number) : any {
    return this.http.get(`${this.baseUrl}${this.endpoint}/GetScapeItem?itemId=${itemId}`);
   }

   //code that gets item from the database by name
    getScapeItemsByName(itemName:string) : any {
      return this.http.get(`${this.baseUrl}${this.endpoint}/GetScapeItemByName?itemName=${itemName}`);
    }
}
