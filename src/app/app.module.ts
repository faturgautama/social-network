import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosComponent } from './components/videos/videos.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PeopleComponent } from './components/people/people.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    NavbarComponent,
    VideosComponent,
    ActivityComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
