import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoverSectionComponent } from './cover-section/cover-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
  ResumeSectionComponent, CoverSectionComponent,
ContactSectionComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioWebsite';
}
