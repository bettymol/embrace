import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCard4Component } from './custom-card4.component';

describe('CustomCard4Component', () => {
  let component: CustomCard4Component;
  let fixture: ComponentFixture<CustomCard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCard4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
