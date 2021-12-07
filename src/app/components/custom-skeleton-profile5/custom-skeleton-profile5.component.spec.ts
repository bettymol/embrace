import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSkeletonProfile5Component } from './custom-skeleton-profile5.component';

describe('CustomSkeletonProfile5Component', () => {
  let component: CustomSkeletonProfile5Component;
  let fixture: ComponentFixture<CustomSkeletonProfile5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkeletonProfile5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSkeletonProfile5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
