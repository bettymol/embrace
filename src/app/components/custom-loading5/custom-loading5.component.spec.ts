import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLoading5Component } from './custom-loading5.component';

describe('CustomLoading5Component', () => {
  let component: CustomLoading5Component;
  let fixture: ComponentFixture<CustomLoading5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoading5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoading5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
