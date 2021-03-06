import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockService } from './mock-service/mock-service.service';

describe('AppComponent', () => {
  let mockService:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MockService],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    mockService = TestBed.get(MockService);

    spyOn(mockService, 'fetchMockDataItems').and.returnValue({
      
        "results": [{
          "price": "$726,500",
          "agency": {
            "brandingColors": {
              "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
          },
          "id": "1",
          "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
        }, {
          "price": "$826,500",
          "agency": {
            "brandingColors": {
              "primary": "#57B5E0"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
          },
          "id": "3",
          "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
        }],
  
        "saved": [{
          "price": "$526,500",
          "agency": {
            "brandingColors": {
              "primary": "#000000"
            },
            "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
          },
          "id": "4",
          "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
        }]
      
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('REA Group');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('REA Group');
  }));

  it(`should the fetchMockDataItems from mock service should be called`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(mockService.fetchMockDataItems).toHaveBeenCalled();
  });

  it(`should get the results items list inintialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app.resultItems[0].id).toEqual('1');
  });

  it(`should get the saved items list inintialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app.savedItems[0].id).toEqual('4');
  });

  it(`moveItem() should remove item according from list to item id`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    fixture.detectChanges();
    app.moveItem('1', app.resultItems, app.savedItems);
    expect(app.resultItems.length).toEqual(1);
    expect(app.savedItems[1].id).toEqual('1');
  });


});
