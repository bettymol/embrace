import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCard7Component } from './custom-card7.component';

describe('CustomCard7Component', () => {
  let component: CustomCard7Component;
  let fixture: ComponentFixture<CustomCard7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCard7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
