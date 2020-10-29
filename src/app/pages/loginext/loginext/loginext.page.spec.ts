import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginextPage } from './loginext.page';

describe('LoginextPage', () => {
  let component: LoginextPage;
  let fixture: ComponentFixture<LoginextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
