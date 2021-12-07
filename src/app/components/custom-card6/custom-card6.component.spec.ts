import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCard6Component } from './custom-card6.component';

describe('CustomCard6Component', () => {
  let component: CustomCard6Component;
  let fixture: ComponentFixture<CustomCard6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCard6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
