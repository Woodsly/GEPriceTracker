import { Component, OnInit } from '@angular/core';
import { WikiItems } from 'src/app/models/wiki-item';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit{
  itemIdInput: number | null = null;
  item: WikiItems = {} as WikiItems;
  constructor(private wikiService:WikiService ) { }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  itemSearchButton_Click(): void {
    if (this.itemIdInput !== null) {
      console.log(this.itemIdInput);
      this.wikiService.getWikiItemsByID(this.itemIdInput).subscribe((response: any) => {
        console.log(response);
        this.item = response;
      });
    } else {
      console.log('Please enter a valid number.');
    }
  }
}
