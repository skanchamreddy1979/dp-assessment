import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdditionalDevicePage } from './additional-device.page';

describe('AdditionalDevicePage', () => {
  let component: AdditionalDevicePage;
  let fixture: ComponentFixture<AdditionalDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionalDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
