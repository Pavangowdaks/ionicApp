import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-resources',
  templateUrl: './no-resources.component.html',
  styleUrls: ['./no-resources.component.scss'],
})

export class NoResourcesComponent {

  @Input() message: string;
  constructor() {}
}
