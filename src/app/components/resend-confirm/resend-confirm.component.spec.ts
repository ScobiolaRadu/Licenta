import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendConfirmComponent } from './resend-confirm.component';

describe('ResendConfirmComponent', () => {
  let component: ResendConfirmComponent;
  let fixture: ComponentFixture<ResendConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
