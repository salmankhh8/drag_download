import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardPasteComponent } from './clipboard-paste.component';

describe('ClipboardPasteComponent', () => {
  let component: ClipboardPasteComponent;
  let fixture: ComponentFixture<ClipboardPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardPasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
