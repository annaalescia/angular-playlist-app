import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PlaylistComponent } from "./playlist/playlist.component";
import { HttpClientModule } from "@angular/common/http";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { BrowseGenresComponent } from "./browse-genres/browse-genres.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SideNavComponent,
    BrowseGenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
