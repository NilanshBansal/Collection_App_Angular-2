import { Component, OnInit } from '@angular/core';
import { CollectablesService } from "../collectables.service";
import { Collectables } from "../collectables.model"
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables : Collectables[]=[];

onAddToCollection(item: Collectables){
  this.collectablesService.addToCollection(item);
}

  constructor(private collectablesService:CollectablesService) { }

  ngOnInit() {
    this.collectables= this.collectablesService.getCollectables();
  }

}
