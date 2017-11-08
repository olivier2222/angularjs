import { Injectable } from '@angular/core';
import { Item } from '../../../items/interfaces/item.model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../items/interfaces/item-id.model';


@Injectable()
export class CollectionService {
 // récupérer la collection
 private itemsCollection: AngularFirestoreCollection<Item>;
 collection: Observable<ItemId[]>;
 itemslist: Observable<any>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.snapshotChanges().map((data)=> {
      return data.map(snap=>{
        return {
          name : snap.payload.doc.data().name,
          reference : snap.payload.doc.data().reference,
          state : snap.payload.doc.data().state,
          id: snap.payload.doc.id
        }
      });
    });
    //this.collection = this.itemsCollection.valueChanges();
    //this.itemsCollection.snapshotChanges().subscribe((data)=>{console.log(data);});

  }

  // update
  update(item : ItemId): void{
      //upt en base
      console.log(item);
      this.afs.doc<Item>('collection/'+item.id).update(item);
  }
  //add
  add(item : Item):void  {
    //console.log(item);
    this.itemsCollection.add(item);
  }
  //delete
  delete(item : ItemId):void  {
    this.afs.doc<Item>('collection/'+item.id).delete();
  }
}
