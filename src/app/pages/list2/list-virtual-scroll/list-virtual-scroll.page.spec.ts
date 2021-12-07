import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListVirtualScrollPage } from './list-virtual-scroll.page';

describe('ListVirtualScrollPage', () => {
  let component: ListVirtualScrollPage;
  let fixture: ComponentFixture<ListVirtualScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVirtualScrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListVirtualScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
