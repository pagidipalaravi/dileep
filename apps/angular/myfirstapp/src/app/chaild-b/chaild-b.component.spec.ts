import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildBComponent } from './chaild-b.component';

describe('ChaildBComponent', () => {
  let component: ChaildBComponent;
  let fixture: ComponentFixture<ChaildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
