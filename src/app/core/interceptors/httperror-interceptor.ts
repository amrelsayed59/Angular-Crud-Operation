import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor {
    constructor(private _Toaster: ToastrService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("Http Interceptor Started")
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error)
                    console.log('---/---',error);
                    this._Toaster.error(errorMessage, "Something Wrong", {
                        timeOut: 3000,
                        closeButton: true,
                        progressBar: true,
                      });
                    return throwError(errorMessage)
                    // return throwError(error.error)
                })
            )
    }

    setError(error: HttpErrorResponse): string {
        let errorMessage = 'Unknown error occured'
        if (error.error instanceof ErrorEvent) {
            // Client side Error
            errorMessage = error.error.message;
        } else {
            // Server side Error
            if(error.status !== 0 ){
                errorMessage = error.error;
                // errorMessage = error.error.errorMessage;
            }
        }
        return errorMessage;
    }
}