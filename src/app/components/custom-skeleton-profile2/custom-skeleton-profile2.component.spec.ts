import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSkeletonProfile2Component } from './custom-skeleton-profile2.component';

describe('CustomSkeletonProfile2Component', () => {
  let component: CustomSkeletonProfile2Component;
  let fixture: ComponentFixture<CustomSkeletonProfile2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkeletonProfile2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSkeletonProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
