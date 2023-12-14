import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-btn',
  templateUrl: './side-nav-btn.component.html',
  styleUrls: ['./side-nav-btn.component.scss'],
})
export class SideNavBtnComponent implements OnInit {
  @Input() icon: string = '';
  constructor() {}

  ngOnInit(): void {}
}
