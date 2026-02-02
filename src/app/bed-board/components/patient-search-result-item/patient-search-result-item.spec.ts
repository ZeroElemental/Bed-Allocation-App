import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchResultItem } from './patient-search-result-item';

describe('PatientSearchResultItem', () => {
  let component: PatientSearchResultItem;
  let fixture: ComponentFixture<PatientSearchResultItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientSearchResultItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSearchResultItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
