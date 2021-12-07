import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSkeletonProfile1Component } from './custom-skeleton-profile1.component';

describe('CustomSkeletonProfile1Component', () => {
  let component: CustomSkeletonProfile1Component;
  let fixture: ComponentFixture<CustomSkeletonProfile1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkeletonProfile1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSkeletonProfile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
