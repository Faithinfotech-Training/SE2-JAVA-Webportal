import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WebCourseComponent } from './webportal/web-course/web-course.component';
import { WebportalComponent } from './webportal/webportal.component';
// import { WebResourceComponent } from './webportal/web-resource/web-resource.component';
// import { WebCourseEnquiryFormComponent } from './webportal/web-course/web-course-enquiry-form/web-course-enquiry-form.component';
// import { AddResourceEnquiryComponent } from './webportal/add-resource-enquiry/add-resource-enquiry.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    WebportalComponent,
    // WebCourseComponent,
    // WebResourceComponent,
    // WebCourseEnquiryFormComponent,
    // AddResourceEnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    OrderModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
