import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  menuOpen = false;
  scrolled = false;

  navLinks: NavLink[] = [
    { label: 'Hero',       href: '#',           icon: '🏠' },
    { label: 'About',      href: '#about',       icon: '👤' },
    { label: 'Skills',     href: '#skills',      icon: '⚡' },
    { label: 'Projects',   href: '#projects',    icon: '🛠️' },
    { label: 'Experience', href: '#experience',  icon: '💼' },
    { label: 'Contact',    href: '#contact',     icon: '✉️' },
  ];

  constructor(public theme: ThemeService) {}

  ngOnInit(): void {
    this.onScroll(); // set initial state
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}