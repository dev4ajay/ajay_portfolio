// skills.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Skill {
  name: string; icon: string; cat: string; level: number;
  accent: string; shadow: string; iconBg: string;
}

@Component({
  selector: 'app-skills',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  activeTab = 'all';

  tabs = [
    { key: 'all',      label: 'All'      },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend',  label: 'Backend'  },
    { key: 'tools',    label: 'Tools'    },
  ];

  allSkills: Skill[] = [
    { name:'Angular',    icon:'🅰️', cat:'frontend', level:5, accent:'#f472b6', shadow:'rgba(244,114,182,0.25)', iconBg:'rgba(244,114,182,0.12)' },
    { name:'React',      icon:'⚛️', cat:'frontend', level:5, accent:'#60a5fa', shadow:'rgba(96,165,250,0.25)',  iconBg:'rgba(96,165,250,0.12)'  },
    { name:'Next.js',    icon:'▲',  cat:'frontend', level:4, accent:'#e5e5e5', shadow:'rgba(255,255,255,0.15)',iconBg:'rgba(255,255,255,0.08)'  },
    { name:'TypeScript', icon:'📘', cat:'frontend', level:4, accent:'#60a5fa', shadow:'rgba(96,165,250,0.25)',  iconBg:'rgba(96,165,250,0.12)'  },
    { name:'Tailwind',   icon:'🌊', cat:'frontend', level:5, accent:'#2dd4bf', shadow:'rgba(45,212,191,0.25)', iconBg:'rgba(45,212,191,0.12)'  },
    { name:'JavaScript', icon:'🟡', cat:'frontend', level:5, accent:'#fbbf24', shadow:'rgba(251,191,36,0.25)', iconBg:'rgba(251,191,36,0.12)'  },
    { name:'Node.js',    icon:'🟢', cat:'backend',  level:4, accent:'#4ade80', shadow:'rgba(74,222,128,0.25)', iconBg:'rgba(74,222,128,0.12)'  },
    { name:'Express',    icon:'🚂', cat:'backend',  level:4, accent:'#a78bfa', shadow:'rgba(167,139,250,0.25)',iconBg:'rgba(167,139,250,0.12)' },
    { name:'MongoDB',    icon:'🍃', cat:'backend',  level:4, accent:'#4ade80', shadow:'rgba(74,222,128,0.25)', iconBg:'rgba(74,222,128,0.12)'  },
    { name:'REST API',   icon:'🔗', cat:'backend',  level:5, accent:'#f472b6', shadow:'rgba(244,114,182,0.25)',iconBg:'rgba(244,114,182,0.12)' },
    { name:'MySQL',      icon:'🗄️', cat:'backend',  level:3, accent:'#60a5fa', shadow:'rgba(96,165,250,0.25)', iconBg:'rgba(96,165,250,0.12)'  },
    { name:'Git',        icon:'🌿', cat:'tools',    level:5, accent:'#fb923c', shadow:'rgba(251,146,60,0.25)', iconBg:'rgba(251,146,60,0.12)'  },
    { name:'Docker',     icon:'🐋', cat:'tools',    level:3, accent:'#60a5fa', shadow:'rgba(96,165,250,0.25)', iconBg:'rgba(96,165,250,0.12)'  },
    { name:'VS Code',    icon:'💙', cat:'tools',    level:5, accent:'#60a5fa', shadow:'rgba(96,165,250,0.25)', iconBg:'rgba(96,165,250,0.12)'  },
    { name:'Postman',    icon:'📮', cat:'tools',    level:4, accent:'#fb923c', shadow:'rgba(251,146,60,0.25)', iconBg:'rgba(251,146,60,0.12)'  },
  ];

  learning = ['System Design','Microservices','Advanced Angular','AWS','GraphQL'];

  get filteredSkills(): Skill[] {
    return this.activeTab === 'all'
      ? this.allSkills
      : this.allSkills.filter(s => s.cat === this.activeTab);
  }

  setTab(key: string) { this.activeTab = key; }
}