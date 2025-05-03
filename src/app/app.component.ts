import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConnectedComponent } from './connected/connected.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    ResumeComponent,
    ExperienceComponent,
    ConnectedComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme(); // Apply the saved theme
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme(); // Apply the new theme
  }

  applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }
}
