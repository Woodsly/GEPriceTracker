import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  endpoint:string = 'api/Wiki'
  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl:string) { }

   getAllWikiItems() : any {
    return this.http.get(`${this.baseUrl}${this.endpoint}/GetAllWikiItems`);
   }


    getWikiItemsByID(id:number) : any {
      return this.http.get(`${this.baseUrl}${this.endpoint}/GetWikiItemById?id=${id}`);
    }
}
