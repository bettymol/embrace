import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll7Page } from './scroll7.page';

describe('Scroll7Page', () => {
  let component: Scroll7Page;
  let fixture: ComponentFixture<Scroll7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
