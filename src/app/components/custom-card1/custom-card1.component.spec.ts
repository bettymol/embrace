import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCard1Component } from './custom-card1.component';

describe('CustomCard1Component', () => {
  let component: CustomCard1Component;
  let fixture: ComponentFixture<CustomCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCard1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
