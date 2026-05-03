// theme.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private _isDark = signal(false);  // ← signal, not plain boolean

  constructor() { this.initTheme(); }

  initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') this.enableDark();
    else if (saved === 'light') this.enableLight();
    else window.matchMedia('(prefers-color-scheme: dark)').matches
      ? this.enableDark() : this.enableLight();
  }

  toggle() { this._isDark() ? this.enableLight() : this.enableDark(); }

  enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this._isDark.set(true);   // ← signal update triggers CD
  }

  enableLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this._isDark.set(false);  // ← signal update triggers CD
  }

  isDark() { return this._isDark(); }  // ← reads signal reactively
}