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
export class GenresService {
  constructor(private http: HttpClient) {}

  public getGenres(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: auth_token
    });
    return this.http
      .get(`${API_URL}/browse/categories`, { headers: headers })
      .pipe(tap(response => response.categories.items));
  }

  // private handleError(error: Response | any) {
  //   console.error("ApiService::handleError", error);
  //   return Observable.throw(error);
  // }
}
