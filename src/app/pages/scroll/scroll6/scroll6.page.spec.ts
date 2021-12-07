import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll6Page } from './scroll6.page';

describe('Scroll6Page', () => {
  let component: Scroll6Page;
  let fixture: ComponentFixture<Scroll6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
