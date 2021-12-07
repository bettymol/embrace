import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll2Page } from './scroll2.page';

describe('Scroll2Page', () => {
  let component: Scroll2Page;
  let fixture: ComponentFixture<Scroll2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
