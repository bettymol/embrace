import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomHeader1Component } from './custom-header1.component';

describe('CustomHeader1Component', () => {
  let component: CustomHeader1Component;
  let fixture: ComponentFixture<CustomHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHeader1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
