import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { PlaylistService } from "../playlist.service";

@Component({
  selector: "app-genre-list",
  templateUrl: "./genre-list.component.html",
  styleUrls: ["./genre-list.component.scss"]
})
export class GenreListComponent implements OnInit {
  genreTracks: Array<any>;
  displayedColumns: string[] = ["Song", "Artist", "Album", "Add"];
  displayedGenre: any;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.displayedGenre = routeParams.id;
      return this.getTracks(this.displayedGenre);
    });
  }

  getTracks = playlistId => {
    this.playlistService
      .getPlaylistTracks(playlistId)
      .subscribe(response => (this.genreTracks = response.items));
  };

  openDialog(name, trackURI): void {
    const dialogRef = this.dialog.open(AddPlaylistModal, {
      width: "250px",
      data: { trackName: name, trackURI: trackURI }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}

@Component({
  selector: "add-playlist-modal",
  templateUrl: "add-playlist-modal.html"
})
export class AddPlaylistModal {
  playlists: Array<any>;
  selectedPlaylist: any;

  constructor(
    private playlistService: PlaylistService,
    public dialogRef: MatDialogRef<AddPlaylistModal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.playlistService
      .getUserPlaylists()
      .subscribe(response => (this.playlists = response.items));
  }

  addTrack = (trackURI, playlistURI) => {
    this.playlistService
      .addTrack(trackURI, playlistURI)
      .subscribe(result => this.dialogRef.close());
  };

  onNoClick(): void {
    this.dialogRef.close();
  }
}
