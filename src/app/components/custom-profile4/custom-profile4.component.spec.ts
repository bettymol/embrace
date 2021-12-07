import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProfile4Component } from './custom-profile4.component';

describe('CustomProfile4Component', () => {
  let component: CustomProfile4Component;
  let fixture: ComponentFixture<CustomProfile4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfile4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProfile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
