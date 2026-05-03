import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  glowBg: string;
  iconBg: string;
  liveUrl: string;
  codeUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack shopping platform with cart, payment gateway, authentication, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #6C63FF, #FF6B9D)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(108,99,255,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Advanced task manager with drag & drop, priority sorting, and real-time updates.',
      tags: ['Angular', 'Tailwind', 'TypeScript'],
      icon: '✅',
      gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(255,107,157,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #fce7f3, #fef3c7)',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Instagram Scheduler',
      description:
        'Automation tool for scheduling posts with analytics dashboard and API integration.',
      tags: ['Next.js', 'Node.js', 'API'],
      icon: '📸',
      gradient: 'linear-gradient(135deg, #43E0C4, #6C63FF)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(67,224,196,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #d1faf4, #ede9fe)',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern responsive portfolio with dark mode, animations, and optimized UI/UX design.',
      tags: ['Angular', 'Tailwind', 'UI/UX'],
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #FFB347, #FF6B9D)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(255,179,71,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #fef3c7, #fce7f3)',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Real-time Chat App',
      description:
        'Scalable chat application with WebSockets, rooms, notifications and media sharing.',
      tags: ['Socket.io', 'React', 'Express'],
      icon: '💬',
      gradient: 'linear-gradient(135deg, #6C63FF, #43E0C4)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(108,99,255,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #ede9fe, #d1faf4)',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'AI Dashboard',
      description:
        'Analytics dashboard powered by AI insights with charts, filters, and CSV export.',
      tags: ['Next.js', 'OpenAI', 'Charts'],
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #FF6B9D, #6C63FF)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(255,107,157,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #fce7f3, #ede9fe)',
      liveUrl: '#',
      codeUrl: '#',
    },
  ];
}