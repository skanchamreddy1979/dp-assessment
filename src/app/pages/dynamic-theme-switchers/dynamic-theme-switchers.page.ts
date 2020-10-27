import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dynamic-theme-switchers',
  templateUrl: './dynamic-theme-switchers.page.html',
  styleUrls: ['./dynamic-theme-switchers.page.scss'],
})
export class DynamicThemeSwitchersPage implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }


  onToggleTheme(event) {
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }

  }

}
