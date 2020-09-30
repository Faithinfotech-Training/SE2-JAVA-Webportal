import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  constructor(public RouterModule:RouterModule,public router:Router) { }

  ngOnInit(): void {
  }

  courseClick(){
    this.router.navigate(['web-course']);
  }

  resourceClick(){
    this.router.navigate(['web-resource']);
  }
}
