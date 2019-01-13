import { Component, OnInit } from "@angular/core";
import { PlaylistService } from "../playlist.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  constructor(private playlistService: PlaylistService) {}
  user: any;
  playlists: Array<any>;

  ngOnInit() {
    this.playlistService
      .getUserPlaylists()
      .subscribe(response => (this.playlists = response.items));
  }
}
