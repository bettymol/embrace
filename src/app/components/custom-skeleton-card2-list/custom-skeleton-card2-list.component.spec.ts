import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSkeletonCard2ListComponent } from './custom-skeleton-card2-list.component';

describe('CustomSkeletonCard2ListComponent', () => {
  let component: CustomSkeletonCard2ListComponent;
  let fixture: ComponentFixture<CustomSkeletonCard2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkeletonCard2ListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSkeletonCard2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
