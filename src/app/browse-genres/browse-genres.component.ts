import { Component, OnInit } from "@angular/core";
import { GenresService } from "../genres.service";

@Component({
  selector: "app-browse-genres",
  templateUrl: "./browse-genres.component.html",
  styleUrls: ["./browse-genres.component.scss"]
})
export class BrowseGenresComponent implements OnInit {
  constructor(private genresService: GenresService) {}

  genres: Array<any>;

  ngOnInit() {
    this.genresService
      .getGenres()
      .subscribe(response => (this.genres = response.categories.items));
  }
}
