import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaylistService } from "../playlist.service";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  tracks: Array<any>;
  displayedColumns: string[] = ["Song", "Artist", "Album", "Delete"];

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams =>
      this.playlistService
        .getPlaylistTracks(routeParams.id)
        .subscribe(response => (this.tracks = response.items))
    );
  }
}
