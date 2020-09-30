import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './homepages/about-us/about-us.component';
import { HomepageComponent } from './homepages/homepage/homepage.component';
import { WebCourseComponent } from './webportal/web-course/web-course.component';
import { WebResourceComponent } from './webportal/web-resource/web-resource.component';
import { WebportalComponent } from './webportal/webportal.component';

const routes: Routes = [
  {
    path: 'webportal', component: WebportalComponent,
    children: [

    ]
  }, 
  { path: 'web-course', component: WebCourseComponent },
  { path: 'web-resource', component: WebResourceComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'aboutus', component: AboutUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
