import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLocationCardComponent } from './ip-location-card.component';

describe('IpLocationCardComponent', () => {
  let component: IpLocationCardComponent;
  let fixture: ComponentFixture<IpLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpLocationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
