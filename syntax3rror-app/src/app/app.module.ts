import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RequestFormComponent } from './components/request-form/request-form.component';

import { ExpDatabaseService } from './services/exp-database.service';
import { ListRequestsComponent } from './components/list-requests/list-requests.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home/:key', component: HomeComponent },
  { path: 'about/:name', component: AboutComponent },
  { path: 'listrequests', component: ListRequestsComponent},
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listrequests', component: ListRequestsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RequestFormComponent,
    ListRequestsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgbModule,


    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ExpDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
