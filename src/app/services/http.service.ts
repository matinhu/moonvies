import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private onProgress: Subject<boolean> = new Subject<boolean>();
  public inProgress = this.onProgress.asObservable();

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  public get(urlPath: string, params?: any) {
    if (params) {
      let url: string = '';
      if (params) {
        for (const p in params) {
          if (
            params[p] &&
            (typeof params[p] === 'string' || params[p] instanceof String)
          ) {
            url += url.length > 0 ? `&${p}=${params[p]}` : `?${p}=${params[p]}`;
          }
        }

        urlPath += url;
      }
    }

    return new Promise((resolve) => {
      this.onProgress.next(true);
      let url: string = urlPath;
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      this.http.get(url, options).subscribe(
        (dados: any) => {
          setTimeout(() => {
            this.onProgress.next(false);
          }, 200);
          resolve(dados);
        },
        (erro: any) => {
          this.onProgress.next(false);
          this.globalService.showMessage(erro.message);
          console.warn(erro.error);
          console.warn(urlPath);
          resolve(false);
        }
      );
    });
  }

  public getJsonp(urlPath: string, params?: any) {
    if (params) {
      let url: string = '';
      if (params) {
        for (const p in params) {
          if (
            params[p] &&
            (typeof params[p] === 'string' || params[p] instanceof String)
          ) {
            url += url.length > 0 ? `&${p}=${params[p]}` : `?${p}=${params[p]}`;
          }
        }

        urlPath += url;
      }
    }

    return new Promise((resolve) => {
      this.onProgress.next(true);
      let url: string = urlPath;
      this.http.jsonp(url,'?callback=JSONP_CALLBACK').subscribe(
        (dados: any) => {
          setTimeout(() => {
            this.onProgress.next(false);
          }, 200);
          resolve(dados);
        },
        (erro: any) => {
          this.onProgress.next(false);
          this.globalService.showMessage(erro.message);
          console.warn(erro.error);
          console.warn(urlPath);
          resolve(false);
        }
      );
    });
  }

  public post(urlPath: string, json: any) {
    return new Promise((resolve) => {
      this.onProgress.next(true);
      let url: string = urlPath;
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      this.http.post(url, json, options).subscribe(
        (dados: any) => {
          this.onProgress.next(false);
          resolve(dados);
        },
        (erro: any) => {
          this.onProgress.next(false);
          this.globalService.showMessage(erro.message);
          console.warn('params:', json);
          console.warn(erro.stack);
          resolve(false);
        }
      );
    });
  }

  public update(urlPath: string, json?: any) {
    return new Promise((resolve) => {
      this.onProgress.next(true);
      let url: string = urlPath;
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      if (!json) {
        options.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Content-Length': '0',
        });
      }
      this.http.put(url, json, options).subscribe(
        (dados: any) => {
          this.onProgress.next(false);
          resolve(dados);
        },
        (erro: any) => {
          this.onProgress.next(false);
          this.globalService.showMessage(erro.message);
          console.warn('params:', json);
          console.warn(erro.error);
          resolve(false);
        }
      );
    });
  }

  public delete(urlPath: string) {
    return new Promise((resolve) => {
      this.onProgress.next(true);
      let url: string = urlPath;
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      this.http.delete(url, options).subscribe(
        (dados: any) => {
          this.onProgress.next(false);
          resolve(true);
        },
        (erro: any) => {
          this.onProgress.next(false);
          this.globalService.showMessage(erro.error.erro);
          resolve(false);
        }
      );
    });
  }
}
