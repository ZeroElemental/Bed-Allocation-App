import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionHistory } from './admission-history';

describe('AdmissionHistory', () => {
  let component: AdmissionHistory;
  let fixture: ComponentFixture<AdmissionHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
