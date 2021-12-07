import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListRadioPage } from './list-radio.page';

describe('ListRadioPage', () => {
  let component: ListRadioPage;
  let fixture: ComponentFixture<ListRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRadioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
