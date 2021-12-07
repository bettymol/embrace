import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaimlistPage } from './claimlist.page';

describe('ClaimlistPage', () => {
  let component: ClaimlistPage;
  let fixture: ComponentFixture<ClaimlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
