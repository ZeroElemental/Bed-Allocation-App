import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferConfirm } from './transfer-confirm';

describe('TransferConfirm', () => {
  let component: TransferConfirm;
  let fixture: ComponentFixture<TransferConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferConfirm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
