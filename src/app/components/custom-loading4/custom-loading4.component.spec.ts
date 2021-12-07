import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLoading4Component } from './custom-loading4.component';

describe('CustomLoading4Component', () => {
  let component: CustomLoading4Component;
  let fixture: ComponentFixture<CustomLoading4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoading4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoading4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
