import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData;
  constructor(private service: DataService) { }
  cols = ['id', 'name', 'email', 'phone', 'website'];
  ngOnInit(): void {
    this.service.getUsers().subscribe((users) => {
      this.userData = (users as any[]).map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
        };
      });
      console.log(this.userData);
    }, (error: Response) => {
      console.log(error);
    });
  }

}
