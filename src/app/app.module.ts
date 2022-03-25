import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { GroupsComponent } from './groups/groups.component';
import { GamingComponent } from './gaming/gaming.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {MatIconModule} from '@angular/material/icon'
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CreatePostComponent } from './home/create-post/create-post.component';
import { SideNavComponent } from './home/components/side-nav/side-nav.component';
import { SideNavItemsComponent } from './home/components/side-nav-items/side-nav-items.component';
import { SideNavShortcutsComponent } from './home/components/side-nav-shortcuts/side-nav-shortcuts.component';
import { StoryComponent } from './home/components/story/story.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './home/components/post-card/post-card.component';
import { RightNavComponent } from './home/components/right-nav/right-nav.component';
import { RightNavTitleComponent } from './home/components/right-nav-title/right-nav-title.component';
import { ContactsListComponent } from './home/components/contacts-list/contacts-list.component';
import { ContactItemComponent } from './home/components/contact-item/contact-item.component';
import { SponsersListComponent } from './home/components/sponsers-list/sponsers-list.component';
import { SponserItemComponent } from './home/components/sponser-item/sponser-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WatchComponent,
    MarketplaceComponent,
    GroupsComponent,
    GamingComponent,
    ProfileComponent,
    AuthPageComponent,
    CreatePostComponent,
    SideNavComponent,
    SideNavItemsComponent,
    SideNavShortcutsComponent,
    StoryComponent,
    PostCardComponent,
    RightNavComponent,
    RightNavTitleComponent,
    ContactsListComponent,
    ContactItemComponent,
    SponsersListComponent,
    SponserItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
