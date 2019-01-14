import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PlaylistService } from "../playlist.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  constructor(
    private playlistService: PlaylistService,
    private userService: UserService
  ) {}
  user: any;
  playlists: Array<any>;
  // selectedPlaylist: any;

  // onSelect(playlistId: any): void {
  //   this.selectedPlaylist = playlistId;
  // }

  @Output() eventClicked = new EventEmitter<Event>();

  onClick(playlistId: any): void {
    this.eventClicked.emit(playlistId);
  }

  ngOnInit() {
    this.playlistService
      .getUserPlaylists()
      .subscribe(response => (this.playlists = response.items));

    this.userService
      .getUserProfile()
      .subscribe(response => (this.user = response));
  }
}
