import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProductList4Component } from './custom-product-list4.component';

describe('CustomProductList4Component', () => {
  let component: CustomProductList4Component;
  let fixture: ComponentFixture<CustomProductList4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductList4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
