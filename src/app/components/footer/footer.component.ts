import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickLink {
  label: string;
  href: string;
}

interface ContactInfo {
  icon: string;
  value: string;
}

interface Social {
  icon: string;
  label: string;
  href: string;
  hoverClass: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  techStack: string[] = [
    'Angular', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'
  ];

  quickLinks: QuickLink[] = [
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
  ];

  contactInfo: ContactInfo[] = [
    { icon: '📍', value: 'Haryana, India'       },
    { icon: '📧', value: 'ajay@example.com'     },
    { icon: '📞', value: '+91 XXXXX XXXXX'      },
  ];

  socials: Social[] = [
    {
      icon: '🌐',
      label: 'Portfolio',
      href: '#',
      hoverClass:
        'hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 hover:shadow-violet-200/60 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10 dark:hover:text-violet-300 dark:hover:shadow-violet-900/40',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: '#',
      hoverClass:
        'hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 hover:shadow-sky-200/60 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10 dark:hover:text-sky-300 dark:hover:shadow-sky-900/40',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      href: '#',
      hoverClass:
        'hover:border-slate-400 hover:bg-slate-100 hover:text-slate-700 hover:shadow-slate-200/60 dark:hover:border-slate-400/50 dark:hover:bg-slate-500/10 dark:hover:text-slate-200 dark:hover:shadow-slate-900/40',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      href: '#',
      hoverClass:
        'hover:border-sky-400 hover:bg-sky-50 hover:text-sky-500 hover:shadow-sky-200/60 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10 dark:hover:text-sky-300 dark:hover:shadow-sky-900/40',
    },
  ];

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}