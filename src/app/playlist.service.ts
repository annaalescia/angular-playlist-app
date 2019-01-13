import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const API_URL = environment.apiUrl;
const auth_token =
  "Bearer BQASclCDSEnz89npRGWf04yK30snaL8Bdojt-Rtjm04-hi7pS6wV7rUJrhGczzLfVAnB4NuthiuxfhzxK7OFBpyhQ0Ok_ht7p1CWGodLM0WKCkVTyjOnBzE0GlJBTGCbWKX1ZZfh109PovjGwC3gAl0lDydV6bodGUaWoYMEOEhcJNut0g";

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

  // private handleError(error: Response | any) {
  //   console.error("ApiService::handleError", error);
  //   return Observable.throw(error);
  // }
}
