import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const API_URL = environment.apiUrl;
const auth_token = environment.auth;

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: auth_token
    });
    return this.http
      .get(`${API_URL}/me`, { headers: headers })
      .pipe(tap(response => response));
  }

  // private handleError(error: Response | any) {
  //   console.error("ApiService::handleError", error);
  //   return Observable.throw(error);
  // }
}
