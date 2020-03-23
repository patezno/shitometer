import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PooperComponent } from './pooper.component';

describe('PooperComponent', () => {
  let component: PooperComponent;
  let fixture: ComponentFixture<PooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PooperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
