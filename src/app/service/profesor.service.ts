import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

@Injectable()
export class ProfesorService {

    private base: string;
    private id;

    constructor(private http: Http) {
        this.base = 'http://localhost:8000/';
    }

    create(token, profesor: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.base + 'profesor/registro', JSON.stringify(profesor), options);
    }

    getProfesores(token): Observable<any> {
        let headers = new Headers({ 'Authorization': token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.base + 'profesor', options);
    }

    getProfesor(token, id): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.base + 'profesor/' + id, options);
    }

    delete(token, run: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.base + 'profesor/eliminar', JSON.stringify(run), options);
    }

    update(token, profesor: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.base + 'profesor/update', JSON.stringify(profesor), options);
    }

    getId() {
        let id = localStorage.getItem('id');
        if (id != "undefined") {
            this.id = id;
        } else {
            this.id = null;
        }
        return this.id;
    }
}