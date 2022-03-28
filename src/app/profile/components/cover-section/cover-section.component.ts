import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-section',
  templateUrl: './cover-section.component.html',
  styleUrls: ['./cover-section.component.scss'],
})
export class CoverSectionComponent implements OnInit {
  constructor() {}

  editMenu = false;

  ngOnInit(): void {}

  toggleEditMenu() {
    this.editMenu = !this.editMenu;
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    if (!event.target.closest('.edit-cover-img')) {
      this.editMenu = false;
    }
  }
}
