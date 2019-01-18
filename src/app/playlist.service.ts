import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const API_URL = environment.apiUrl;
const auth_token = environment.auth;

@Injectable({
  providedIn: "root"
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  public getUserPlaylists(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: auth_token
    });
    return this.http
      .get(`${API_URL}/me/playlists`, { headers: headers })
      .pipe(tap(response => response.items));
  }

  public getPlaylistTracks(playlistId): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: auth_token
    });
    return this.http
      .get(`${API_URL}/playlists/${playlistId}/tracks`, { headers: headers })
      .pipe(tap(response => console.log(response)));
  }

  public deleteTrack(playlistId, tracks): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: auth_token
    });

    return this.http
      .request("delete", `${API_URL}/playlists/${playlistId}/tracks`, {
        body: JSON.stringify(tracks),
        headers: headers
      })
      .pipe(tap(response => console.log(response)));
  }

  // private handleError(error: Response | any) {
  //   console.error("ApiService::handleError", error);
  //   return Observable.throw(error);
  // }
}
