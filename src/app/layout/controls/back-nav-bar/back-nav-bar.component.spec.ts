import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavBarComponent } from './back-nav-bar.component';

describe('BackNavBarComponent', () => {
  let component: BackNavBarComponent;
  let fixture: ComponentFixture<BackNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
