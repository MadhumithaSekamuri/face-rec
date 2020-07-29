import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  index: number = 1;
  navOptions = [
    { id: 1, label: 'Sign in', routePath: '', imgPath: '../../assets/img/login.svg' },
    { id: 0, label: 'Sign up', routePath: 'signup', imgPath: '../../assets/img/signup.svg' },
  ];
  routeEvents: any;
  isLoggedIn: boolean;
  constructor(private route: Router) { }

  ngOnInit(): void {
    const navPaths = ['/', '/signup'];
    this.route.events.pipe(filter((e): e is RouterEvent => e instanceof RouterEvent)).subscribe((val) => {
      if (navPaths.includes(val.url)) {
        console.log(this.navOptions);
        this.isLoggedIn = false;
      } else {
        this.navOptions = [];
        this.navOptions = [
          { id: 3, label: 'Dashboard', routePath: 'dashboard', imgPath: '' }
        ];
        this.isLoggedIn = true;
      }
    });
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  onOptionClick(navOption: any, index: number) {
    this.index = index;
  }

}
