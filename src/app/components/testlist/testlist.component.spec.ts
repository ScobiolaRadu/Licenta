import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlistComponent } from './testlist.component';

describe('TestlistComponent', () => {
  let component: TestlistComponent;
  let fixture: ComponentFixture<TestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
