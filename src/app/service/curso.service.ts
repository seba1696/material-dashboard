import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Curso } from '../models/curso';


@Injectable()
export class CursoService {
    public url: string;
    constructor(public _http: HttpClient) {

    }

    pruebas() {
        return "Hola mundo";
    }

    create(token, curso: Curso): Observable<any> {
        let json = JSON.stringify(curso);
        let params = "json" + json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.post(this.url + 'ruta-api', params, { headers: headers });
    }

    getCursos(): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode');
        return this._http.get(this.url + 'ruta-api', { headers: headers });
    }

    getCurso(id): Observable<any> {
        return this._http.get(this.url + 'ruta-api/' + id);
    }

    update(token, curso, id): Observable<any> {
        let json = JSON.stringify(curso);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.put(this.url + 'url-api' + id, params, { headers: headers });
    }

    delete(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.delete(this.url + 'url-api' + id, { headers: headers });
    }
}