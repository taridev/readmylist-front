import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TaskListService} from "../services/TaskListService";
import {TaskService} from "../services/TaskService";
import {Router} from "@angular/router";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor{

    constructor(
        private router: Router,
        private taskListService: TaskListService,
        private taskService: TaskService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = { username: 'user', password: 'password'};
        const credential = window.btoa(currentUser.username + ':' + currentUser.password);
        req = req.clone({
            setHeaders: {
                Authorization: `Basic ${credential}`
            }
        });
        return next.handle(req);
    }
}
