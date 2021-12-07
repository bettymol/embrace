import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProductList1Component } from './custom-product-list1.component';

describe('CustomProductList1Component', () => {
  let component: CustomProductList1Component;
  let fixture: ComponentFixture<CustomProductList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductList1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
