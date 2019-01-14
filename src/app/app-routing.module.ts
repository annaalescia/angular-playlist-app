import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistComponent } from "./playlist/playlist.component";
import { BrowseGenresComponent } from "./browse-genres/browse-genres.component";

const routes: Routes = [
  { path: "playlist/:id", component: PlaylistComponent },
  { path: "", component: BrowseGenresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
