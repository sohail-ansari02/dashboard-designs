import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-globle-style',
  templateUrl: './globle-style.component.html',
  styleUrls: ['./globle-style.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobleStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
