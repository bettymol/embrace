import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSkeletonProfile7Component } from './custom-skeleton-profile7.component';

describe('CustomSkeletonProfile7Component', () => {
  let component: CustomSkeletonProfile7Component;
  let fixture: ComponentFixture<CustomSkeletonProfile7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkeletonProfile7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSkeletonProfile7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
