import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSelectPage } from './list-select.page';

describe('ListSelectPage', () => {
  let component: ListSelectPage;
  let fixture: ComponentFixture<ListSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
