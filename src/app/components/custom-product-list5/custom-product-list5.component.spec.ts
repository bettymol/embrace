import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProductList5Component } from './custom-product-list5.component';

describe('CustomProductList5Component', () => {
  let component: CustomProductList5Component;
  let fixture: ComponentFixture<CustomProductList5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductList5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductList5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
