import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProductList3Component } from './custom-product-list3.component';

describe('CustomProductList3Component', () => {
  let component: CustomProductList3Component;
  let fixture: ComponentFixture<CustomProductList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductList3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
