import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTogglePage } from './list-toggle.page';

describe('ListTogglePage', () => {
  let component: ListTogglePage;
  let fixture: ComponentFixture<ListTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTogglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
