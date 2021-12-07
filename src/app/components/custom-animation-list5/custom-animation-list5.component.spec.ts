import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomAnimationList5Component } from './custom-animation-list5.component';

describe('CustomAnimationList5Component', () => {
  let component: CustomAnimationList5Component;
  let fixture: ComponentFixture<CustomAnimationList5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnimationList5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAnimationList5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
