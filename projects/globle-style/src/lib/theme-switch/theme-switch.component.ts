import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
interface customStyle {
  btn?: string;
  bg?: string;
}
@Component({
  selector: 'lib-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent implements OnInit {
  @Input() colorStyle: customStyle = {};
  @Output() theme: EventEmitter<string> = new EventEmitter();

  private themeKey: string = 'theme';

  set currentTheme(themeName: string | null) {
    localStorage.setItem(this.themeKey, <string>themeName);
  }
  get currentTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }

  get isDark(): boolean {
    return this.currentTheme == 'dark';
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    if (!this.currentTheme) {
      this.systemMode();
    }
    this.renderer.addClass(
      this.document.body,
      this.currentTheme + '-theme'
    )
  }
  systemMode() {
    // Check if the user prefers a dark color scheme
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.currentTheme = 'dark';
      console.log('Dark mode is preferred');
    } else {
      this.currentTheme = 'light';
      // this.toggle = true;
      console.log('Light mode is preferred');
    }
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme == 'light' ? 'dark' : 'light';

    this.theme.emit(this.isDark ? 'ḍark' : 'light');

    this.renderer.addClass(
      this.document.body,
      (this.isDark? 'dark' : 'light') + '-theme'
    );
    this.renderer.removeClass(
      this.document.body,
      (!this.isDark ? 'dark' : 'light') + '-theme'
    );
  }
}
