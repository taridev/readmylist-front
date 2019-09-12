import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const url = `${API_URL}/user/authenticate`;
        const user = new User();
        user.password = password;
        user.username = username;
        return this.http.post(url, user)
            .pipe(map(userJson => {
                const userToStore = new User(userJson);
                userToStore.authdata = window.btoa(user.username + ':' + user.password);
                userToStore.password = '';
                localStorage.setItem('currentUser', JSON.stringify(userToStore));
                this.currentUserSubject.next(userToStore);
                return userToStore;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
