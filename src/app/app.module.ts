import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { PlaylistComponent } from "./playlist/playlist.component";
import { HttpClientModule } from "@angular/common/http";
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, PlaylistComponent, SideNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
