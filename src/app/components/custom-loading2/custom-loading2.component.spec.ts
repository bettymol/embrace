import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLoading2Component } from './custom-loading2.component';

describe('CustomLoading2Component', () => {
  let component: CustomLoading2Component;
  let fixture: ComponentFixture<CustomLoading2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoading2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
