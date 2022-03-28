import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.scss'],
})
export class NameSectionComponent implements OnInit {
  @Input() friendsList: any;

  constructor() {}

  ngOnInit(): void {}
}
