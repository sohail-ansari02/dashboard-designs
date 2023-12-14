import { Component, OnInit } from '@angular/core';
interface link {
  name: string;
  path: string;
  icon: string;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  links: link[] = [
    { name: 'dashboard', path: '/', icon: 'sun' },
    { name: 'wallet', path: '/wallet', icon: 'wallet' },
    { name: 'payments', path: '/payments', icon: 'credit-card' },
    { name: 'analytics', path: '/analytics', icon: 'chart-bar' },
    { name: 'settings', path: '/settings', icon: 'cogs' },
    { name: 'support', path: '/support', icon: 'life-ring' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
