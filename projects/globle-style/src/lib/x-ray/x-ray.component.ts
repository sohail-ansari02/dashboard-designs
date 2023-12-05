import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-x-ray',
  templateUrl: './x-ray.component.html',
  styleUrls: ['./x-ray.component.scss'],
})
export class XRayComponent {
  toggle: boolean = !false;
  _CLASS_NAME = 'x-ray';

  constructor(private renderer: Renderer2) {}

  toggleButton() {
    if (this.toggle) {
      this.renderer.addClass(document.body, this._CLASS_NAME);
    } else {
      this.renderer.removeClass(document.body, this._CLASS_NAME);
    }
    this.toggle = !this.toggle;
  }
}
