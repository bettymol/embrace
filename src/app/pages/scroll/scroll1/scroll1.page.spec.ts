import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll1Page } from './scroll1.page';

describe('Scroll1Page', () => {
  let component: Scroll1Page;
  let fixture: ComponentFixture<Scroll1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
