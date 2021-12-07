import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaimPage } from './claim.page';

describe('ClaimPage', () => {
  let component: ClaimPage;
  let fixture: ComponentFixture<ClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
