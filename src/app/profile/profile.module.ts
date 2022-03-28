import { ProfileComponent } from './profile.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CoverSectionComponent } from './components/cover-section/cover-section.component';
import { NameSectionComponent } from './components/name-section/name-section.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { PostSectionComponent } from './components/post-section/post-section.component';

@NgModule({
  declarations: [ProfileComponent, CoverSectionComponent, NameSectionComponent, MenuSectionComponent, PostSectionComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
