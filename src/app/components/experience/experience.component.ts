import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  icon: string;
  color: string;
  gradient: string;
  glowBg: string;
  iconBg: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'Prometheus Technologies Pvt. Ltd.',
      period: '2024 – Present',
      description:
        'Working on enterprise dashboards using Angular, React & Next.js with focus on scalability and performance.',
      points: [
        'Improved performance by 40% using lazy loading',
        'Built reusable component library',
        'Integrated real-time APIs & WebSockets',
      ],
      tags: ['Angular', 'React', 'Next.js'],
      icon: '🚀',
      color: '#6C63FF',
      gradient: 'linear-gradient(135deg, #6C63FF, #FF6B9D)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(108,99,255,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #ede9fe, #fce7f3)',
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance Projects',
      period: '2023 – 2024',
      description:
        'Built multiple responsive web applications with modern UI and API integration.',
      points: [
        'Developed 10+ responsive websites',
        'Implemented JWT authentication',
        'Worked with REST APIs & third-party services',
      ],
      tags: ['React', 'Node.js', 'API'],
      icon: '💼',
      color: '#FF6B9D',
      gradient: 'linear-gradient(135deg, #FF6B9D, #FFB347)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(255,107,157,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #fce7f3, #fef3c7)',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Tech Startup',
      period: '2022 – 2023',
      description:
        'Worked on frontend + backend development and learned real-world production workflows.',
      points: [
        'Developed CRUD applications end-to-end',
        'Built authentication & authorization systems',
        'Database integration with MongoDB',
      ],
      tags: ['Node.js', 'MongoDB', 'Express'],
      icon: '⚡',
      color: '#43E0C4',
      gradient: 'linear-gradient(135deg, #43E0C4, #6C63FF)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(67,224,196,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #d1faf4, #ede9fe)',
    },
    {
      role: 'Personal Projects Developer',
      company: 'Self Learning',
      period: '2021 – 2022',
      description:
        'Started my journey by building UI projects and learning frontend development fundamentals.',
      points: [
        'Built portfolio websites from scratch',
        'Practiced JavaScript & DOM manipulation',
        'Learned responsive design principles',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: '🌱',
      color: '#FFB347',
      gradient: 'linear-gradient(135deg, #FFB347, #FF6B9D)',
      glowBg:
        'radial-gradient(ellipse at top left, rgba(255,179,71,0.06) 0%, transparent 70%)',
      iconBg: 'linear-gradient(135deg, #fef3c7, #fce7f3)',
    },
  ];
}