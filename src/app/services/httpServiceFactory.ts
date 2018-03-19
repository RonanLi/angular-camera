import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CameraService } from './camera.service';

@Injectable()
export class HttpServiceFactory implements HttpInterceptor {

  constructor(private auth: CameraService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = "application/x-www-form-urlencoded";
    var authReq;
    if(this.auth.apiKey){
      authReq = req
        .clone({headers: req.headers.set('Content-Type', authHeader)})
        .clone({setHeaders: {apiKey: this.auth.apiKey}});
    }else{
      authReq = req
        .clone({headers: req.headers.set('Content-Type', authHeader)})
    }
    return next.handle(authReq);
  }
}
