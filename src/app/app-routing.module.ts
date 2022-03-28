import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { GamingComponent } from './gaming/gaming.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProfileComponent } from './profile/profile.component';
import { WatchComponent } from './watch/watch.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component:FriendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
