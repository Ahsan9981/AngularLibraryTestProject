import { Component, OnInit } from '@angular/core';

import { User, DataAccessService } from 'backend-communication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Test-Project';

  user: User;

  constructor(private dataAccessService: DataAccessService) {}

  ngOnInit(): void {
    this.user = this.dataAccessService.getUser();
  }
}
