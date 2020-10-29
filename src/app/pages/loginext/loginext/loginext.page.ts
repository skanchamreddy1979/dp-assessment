import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginext',
  templateUrl: './loginext.page.html',
  styleUrls: ['./loginext.page.scss'],
})
export class LoginextPage implements OnInit {
  shownGroup = null;
  diseases = [
    { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a efficitur nisi. Quisque vitae erat erat. Quisque ex sem, rhoncus at viverra ut, semper sed dolor" },
    { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a efficitur nisi. Quisque vitae erat erat. Quisque ex sem, rhoncus at viverra ut, semper sed dolor" },
    { title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a efficitur nisi. Quisque vitae erat erat. Quisque ex sem, rhoncus at viverra ut, semper sed dolor" }
      ];
  constructor() { }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

  ngOnInit() {
  }

}
