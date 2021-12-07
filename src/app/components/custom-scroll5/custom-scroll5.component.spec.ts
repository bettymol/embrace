import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomScroll5Component } from './custom-scroll5.component';

describe('CustomScroll5Component', () => {
  let component: CustomScroll5Component;
  let fixture: ComponentFixture<CustomScroll5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScroll5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomScroll5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
