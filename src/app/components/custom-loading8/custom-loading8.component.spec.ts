import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLoading8Component } from './custom-loading8.component';

describe('CustomLoading8Component', () => {
  let component: CustomLoading8Component;
  let fixture: ComponentFixture<CustomLoading8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoading8Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoading8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
