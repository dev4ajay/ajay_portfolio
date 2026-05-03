import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: FormData = { name: '', email: '', message: '' };
  submitted = false;
  sending = false;
  charCount = 0;
  ripples: Ripple[] = [];

  onMessageInput(): void {
    this.charCount = this.formData.message.length;
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.sending = true;

    // Simulate API call
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
    }, 1400);
  }

  addRipple(event: MouseEvent): void {
    const btn = event.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple: Ripple = {
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
    };
    this.ripples.push(ripple);
    setTimeout(() => this.ripples.shift(), 700);
  }

  resetForm(): void {
    this.formData = { name: '', email: '', message: '' };
    this.charCount = 0;
    this.submitted = false;
  }
}