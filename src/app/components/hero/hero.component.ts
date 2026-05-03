import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 typedText = '';
  private words = ['Full Stack Developer', 'Angular Specialist', 'React Developer', 'UI/UX Enthusiast', 'Next.js Expert'];
  private wi = 0; private ci = 0; private deleting = false;
  private timer: any;

  techs = ['Angular', 'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'];

  stats = [
    { value: 0, suffix: '+', label: 'Years Exp.',    target: 2  },
    { value: 0, suffix: '+', label: 'Projects Done', target: 25 },
    { value: 0, suffix: '+', label: 'Happy Clients', target: 15 },
    { value: 0, suffix: '%', label: 'Satisfaction',  target: 100 },
  ];

  ngOnInit() {
    setTimeout(() => this.type(), 1000);
    setTimeout(() => this.animateStats(), 800);
  }

  private type() {
    const word = this.words[this.wi];
    if (!this.deleting) {
      this.typedText = word.slice(0, ++this.ci);
      if (this.ci === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.typedText = word.slice(0, --this.ci);
      if (this.ci === 0) {
        this.deleting = false;
        this.wi = (this.wi + 1) % this.words.length;
        this.timer = setTimeout(() => this.type(), 400);
        return;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 90);
  }

  private animateStats() {
    this.stats.forEach(s => {
      const dur = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        s.value = Math.round(ease * s.target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  ngOnDestroy() { clearTimeout(this.timer); }
}
