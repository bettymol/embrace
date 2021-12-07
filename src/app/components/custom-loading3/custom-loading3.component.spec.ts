import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLoading3Component } from './custom-loading3.component';

describe('CustomLoading3Component', () => {
  let component: CustomLoading3Component;
  let fixture: ComponentFixture<CustomLoading3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoading3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoading3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
