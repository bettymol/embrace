import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCheckboxPage } from './list-checkbox.page';

describe('ListCheckboxPage', () => {
  let component: ListCheckboxPage;
  let fixture: ComponentFixture<ListCheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCheckboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
