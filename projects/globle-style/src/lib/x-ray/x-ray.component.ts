import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-x-ray',
  templateUrl: './x-ray.component.html',
  styleUrls: ['./x-ray.component.scss'],
  // providers: [DOCUMENT]
})
export class XRayComponent {
  toggle: boolean = !false;
  _CLASS_NAME = 'x-ray';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleButton() {
    if (this.toggle) {
      this.renderer.addClass(this.document.body, this._CLASS_NAME);
    } else {
      this.renderer.removeClass(this.document.body, this._CLASS_NAME);
    }
    this.toggle = !this.toggle;
  }
}
