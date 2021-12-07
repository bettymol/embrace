import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProfile5Component } from './custom-profile5.component';

describe('CustomProfile5Component', () => {
  let component: CustomProfile5Component;
  let fixture: ComponentFixture<CustomProfile5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfile5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProfile5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
