import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent implements OnInit {
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb3wWKOEGiZOiTSiZDoeHUAsyJPim4hWKGEXu5b_iWFxT-Lg-Lv5lqt4Jk4-i5XAbc0M&usqp=CAU';

  constructor() { }

  ngOnInit(): void {
  }

}
