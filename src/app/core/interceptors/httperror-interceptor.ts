import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log("Http Interceptor Started")
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error)
                    console.log('---/---',error);
                    console.log('errorMessage',errorMessage);
                    alert(`Server Error ==> ${errorMessage}`)
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