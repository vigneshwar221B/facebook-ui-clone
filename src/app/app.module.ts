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
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CreatePostComponent } from './home/create-post/create-post.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
