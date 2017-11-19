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

  constructor(public mockService:MockService){
  }

  ngOnInit() {
    this.loading = true;
    this.fetchItems();
  };

  fetchItems = () => {
    this.loading = false;
    this.resultItems = this.mockService.fetchMockDataItems().results;
    this.savedItems = this.mockService.fetchMockDataItems().saved;

    console.log(this.resultItems, this.savedItems);
    
  }
  
}
