import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaylistService } from "../playlist.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  tracks: Array<any>;
  displayedColumns: string[] = ["Song", "Artist", "Album", "Delete"];
  displayedPlaylist: any;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.displayedPlaylist = routeParams.id;
      return this.getTracks(this.displayedPlaylist);
    });
  }

  getTracks = playlistId => {
    this.playlistService
      .getPlaylistTracks(playlistId)
      .subscribe(response => (this.tracks = response.items));
  };

  deleteTrack = trackURI => {
    let trackObj = { tracks: [{ uri: trackURI }] };
    this.playlistService
      .deleteTrack(this.displayedPlaylist, trackObj)
      .subscribe(() => this.getTracks(this.displayedPlaylist));
  };
}
