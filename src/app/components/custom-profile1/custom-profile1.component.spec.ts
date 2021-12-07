import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomProfile1Component } from './custom-profile1.component';

describe('CustomProfile1Component', () => {
  let component: CustomProfile1Component;
  let fixture: ComponentFixture<CustomProfile1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfile1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProfile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
