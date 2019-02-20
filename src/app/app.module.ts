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
import {
  GenreListComponent,
  AddPlaylistModal
} from "./genre-list/genre-list.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SideNavComponent,
    BrowseGenresComponent,
    GenreListComponent,
    AddPlaylistModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  entryComponents: [AddPlaylistModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
