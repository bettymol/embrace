import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCard2Component } from './custom-card2.component';

describe('CustomCard2Component', () => {
  let component: CustomCard2Component;
  let fixture: ComponentFixture<CustomCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCard2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
