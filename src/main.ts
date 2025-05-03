import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // ✅ path to app.component.ts

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
