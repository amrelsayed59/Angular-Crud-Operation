import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HandleErrorService } from '../http/handle-error.service';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _HttpClient: HttpClient,
    public _handleErrors: HandleErrorService,
  ) { }

  //Get All Posts
  getAll(): Observable<any> {
    return this._HttpClient.get(`${env.apiUrl}/posts`)  //.pipe(catchError(this._handleErrors.logError))  //Handling Error
  }

}
