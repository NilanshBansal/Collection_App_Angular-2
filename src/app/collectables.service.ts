import { Collectables } from "./collectables.model";

export class CollectablesService {
  private collectables:Collectables[]=[
    {description: 'FIRST ITEM' , type: 'book' },
    {description: 'SECOND ITEM' , type: 'Paper'},
    {description: 'THIRD ITEM' , type: 'Photo'},
    {description: 'FOURTH ITEM' , type: 'Garbage'}

  ];

  private collection:Collectables[]= [];

  getCollectables(){
    return this.collectables;
  }

  getCollection(){
    return this.collection;
  }
  addToCollection(item:Collectables){
    if(this.collection.indexOf(item)!==-1)
    {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item:Collectables){
    this.collection.splice(this.collection.indexOf(item),1);
  }
}
