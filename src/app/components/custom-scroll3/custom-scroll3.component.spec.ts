import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomScroll3Component } from './custom-scroll3.component';

describe('CustomScroll3Component', () => {
  let component: CustomScroll3Component;
  let fixture: ComponentFixture<CustomScroll3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScroll3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomScroll3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
