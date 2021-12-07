import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomScroll2Component } from './custom-scroll2.component';

describe('CustomScroll2Component', () => {
  let component: CustomScroll2Component;
  let fixture: ComponentFixture<CustomScroll2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScroll2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomScroll2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
