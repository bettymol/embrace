import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scroll5Page } from './scroll5.page';

describe('Scroll5Page', () => {
  let component: Scroll5Page;
  let fixture: ComponentFixture<Scroll5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scroll5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scroll5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
