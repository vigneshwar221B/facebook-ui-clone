import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sideNavActive = false;

  lastItem = {
    item: 'See more',
    img_url: 'assets/see-more.svg',
  };

  toggleSideNav() {
    this.sideNavActive = !this.sideNavActive;

    if (this.sideNavActive) {
      for (let i = 0; i < this.viewMore.length; i++) {
        this.navItems.push(this.viewMore[i]);
      }
      this.lastItem = {
        item: 'See less',
        img_url: 'assets/see-less.svg',
      };
    } else {
      this.navItems = this.navItems.slice(0, 6);
      this.lastItem = {
        item: 'See more',
        img_url: 'assets/see-more.svg',
      };
    }
  }

  navItems = [
    {
      item: 'Pranesh Vimal',
      img_url:
        'https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.6435-1/203190343_3072727956340665_5106134406365931647_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=vmxET0H7QfcAX_qPUyc&_nc_ht=scontent.fmaa2-2.fna&oh=00_AT_-VAiQf6YddOHSf482K36gxuqWt6Jxua_kA4698jujEg&oe=6261427E',
    },
    {
      item: 'Friends',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png',
    },
    {
      item: 'Groups',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/L2qlIhGe55v.png',
    },
    {
      item: 'Marketplace',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/P82afdZb-gc.png',
    },
    {
      item: 'Watch',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png',
    },
    {
      item: 'Memories',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/24MgFlPfCs5.png',
    },
  ];

  viewMore = [
    {
      item: 'Ad Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/fmToT78-51T.png',
    },
    {
      item: 'Ads Management',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/nd7CyR2WGle.png',
    },
    {
      item: 'Blood Donations',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/xUHsnwbmQ8Y.png',
    },
    {
      item: 'Business Manager',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yi16DpsqncT.png',
    },
    {
      item: 'Climate Science Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/1QdddKbdW4i.png',
    },
    {
      item: 'Community Help',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/6LdSVr10yjo.png',
    },
    {
      item: 'COVID-19 Information Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/kfSgA-GTBf9.png',
    },
    {
      item: 'Emotional Health',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/Qa07IQGXD4p.png',
    },
    {
      item: 'Events',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/qB7KME4oQ7N.png',
    },
    {
      item: 'Favourites',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/6z6PkjynH7u.png',
    },
    {
      item: 'Fundraisers',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/hZ_wPvPD4VY.png',
    },
    {
      item: 'Gaming video',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/63SCnWduL0m.png',
    },
    {
      item: 'Live videos',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/JA2Qea2fapO.png',
    },
    {
      item: 'Messenger',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/T1kBj3hDJS8.png',
    },
    {
      item: 'Messenger Kids',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/80KoOVGSS1W.png',
    },
    {
      item: 'Most recent',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/FotFk27Ykon.png',
    },
    {
      item: 'Pages',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/TbOx5lWkw-N.png',
    },
    {
      item: 'Play games',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Rwoc8jeB73K.png',
    },
    {
      item: 'Recent ad activity',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/u6E3qp8lSIK.png',
    },
    {
      item: 'Saved',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/EygD86pCwoD.png',
    },
    {
      item: 'Weather',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5II62CEPpjX.png',
    },
  ];

  shortcuts = [
    {
      item: 'Candy Crush Saga',
      img_url:
        'https://scontent.fblr17-1.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.103.103a_dst-png_p110x110&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=R15Gxkdya74AX8CinTK&_nc_ht=scontent.fblr17-1.fna&oh=00_AT9QFZrawjWCJ3bh2QPffuv3X2ctqg2DvhYw87y-JMFGkg&oe=62416C82',
    },
    {
      item: 'Criminal Case',
      img_url:
        'https://scontent.fblr17-1.fna.fbcdn.net/v/t39.2081-6/12057001_427250474066399_2006674606_n.png?stp=c6.6.103.103a_dst-png_p110x110&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=RQQ3xFTx0isAX8YpL1j&_nc_ht=scontent.fblr17-1.fna&oh=00_AT_8YLYdAFOXhwSXtwaDnK4v0xkCHQKPOr3Yo_qjKPJUTQ&oe=62406F3C',
    },
    {
      item: "Diggy's Adventure",
      img_url:
        'https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.2081-6/55589414_2082467898503397_3379962373723914240_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=IF2voqcU1xIAX--0DAz&_nc_ht=scontent.fmaa2-3.fna&oh=00_AT_RPrp2PyUAF2z28FHQ4jOLTrgpa-KcH_k-svkUVERBCg&oe=62406F60',
    },
  ];
}
