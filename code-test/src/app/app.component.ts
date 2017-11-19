import { Component } from '@angular/core';
import { MockService } from './mock-service/mock-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'REA Group';
  resultItems:any;
  savedItems:any;
  private loading: boolean = true;
  private moving: boolean = false;

  constructor(public mockService:MockService){
  }

  ngOnInit() {
    this.loading = true;
    this.moving = false;
    this.fetchItems();
  };

  fetchItems = () => {
    this.loading = false;
    this.resultItems = this.mockService.fetchMockDataItems().results;
    this.savedItems = this.mockService.fetchMockDataItems().saved;

    console.log(this.resultItems, this.savedItems);
  }

  moveItem = (itemId, fromList, toList) =>{
    var itemToMove;
    var index;
    for (var n in fromList){
      if (fromList[n].id == itemId){
        itemToMove = fromList[n];
        index = n;
      }
      break;
    }

    console.log(itemToMove, index);
  
    
    toList.push(itemToMove);
    fromList.splice(index,1);

    console.log(this.resultItems, this.savedItems);   
  }
  
}
