import { Component, OnInit } from '@angular/core';
import { Collectables }from "../collectables.model";
import { CollectablesService } from "../collectables.service"
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectables[] =[];

  onRemoveFromCollection(item:Collectables){
    this.collectablesService.removeFromCollection(item);
  }

  constructor(private collectablesService: CollectablesService) { }

  ngOnInit() {
    this.collectedItems=this.collectablesService.getCollection();
  }

}
