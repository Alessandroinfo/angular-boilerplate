import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CSSDebugDirective} from './css-debug.directive';
import {expect} from '@jest/globals';

@Component({
  template: '<div appCssDebug>Debug CSS</div>',
})
class TestComponent {}

describe('CSSDebugDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSSDebugDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should add the "css-debug" class to the element', () => {
    expect(debugElement.nativeElement.classList).toContain('css-debug');
  });
});
