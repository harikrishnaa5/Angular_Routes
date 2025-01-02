import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesService } from './Services/services.service';
import { CourseService } from './Services/course.service';

// ROUTES
const routes: Routes = [
  // {path: '', component:HomeComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:HomeComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Contact', component:ContactComponent},
  {path: 'Courses', component:CoursesComponent},
  {path: '**', component:NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServicesService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
