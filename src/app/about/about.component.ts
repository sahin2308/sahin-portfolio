import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None, // 👈 VERY IMPORTANT!
})
export class AboutComponent {

}
