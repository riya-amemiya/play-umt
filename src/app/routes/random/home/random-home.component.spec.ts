import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { RandomHomeComponent } from "./random-home.component";

describe("RandomComponent", () => {
  let component: RandomHomeComponent;
  let fixture: ComponentFixture<RandomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
