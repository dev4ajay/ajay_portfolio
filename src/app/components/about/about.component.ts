// about.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  animated = false;

  highlights = [
    { icon: '⚡', color: 'purple', title: '2+ Years Exp.',   sub: 'Production-grade apps' },
    { icon: '🚀', color: 'pink',   title: 'Fast Learner',    sub: 'Adapts to new tech quickly' },
    { icon: '🎯', color: 'blue',   title: 'Problem Solver',  sub: 'Clean, efficient solutions' },
    { icon: '💡', color: 'teal',   title: 'Creative UI',     sub: 'Pixel-perfect interfaces' },
  ];

  skills = [
    { name: 'Frontend',       pct: 92, color: 'bf1' },
    { name: 'Backend',        pct: 78, color: 'bf2' },
    { name: 'React / Next.js',pct: 88, color: 'bf3' },
    { name: 'UI / UX Design', pct: 75, color: 'bf4' },
  ];

  ngOnInit() {
    setTimeout(() => this.animated = true, 600);
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}