import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProductList6Component } from './custom-product-list6.component';

describe('CustomProductList6Component', () => {
  let component: CustomProductList6Component;
  let fixture: ComponentFixture<CustomProductList6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductList6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductList6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
