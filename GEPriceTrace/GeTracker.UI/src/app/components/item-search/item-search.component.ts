import { Component, OnInit } from '@angular/core';
import { ScapeDBItem } from 'src/app/models/scape-db-item';
import { ScapeItemService } from 'src/app/services/scape-item.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  
  itemSearchInput: number = 4100;
  item:ScapeDBItem = {} as ScapeDBItem
  constructor(private scapeItemService: ScapeItemService) {}

  ngOnInit(): void {
    this.scapeItemService.getScapeItems(4151).subscribe((response: any) => {
      console.log(response);
    })
  }

  itemSearchButton_Click(): void {
    console.log(this.itemSearchInput)
    this.scapeItemService.getScapeItems(this.itemSearchInput).subscribe((response: any) => {
      console.log(response);
      this.item = response;
    })
  }
}
