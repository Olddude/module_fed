import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UnsafeService {
  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly http: HttpClient
  ) { }

  rawUnsafeHtml(): Observable<string> {
    return this.http.get(environment.unsafeSource, { observe: 'response', responseType: 'text' }).pipe(
      map(response => response.body!),
      catchError(error => of(error))
    );
  }

  trustUnsafeHtml(): Observable<SafeHtml> {
    return this.rawUnsafeHtml().pipe(
      map(rawHtml => this.domSanitizer.bypassSecurityTrustHtml(rawHtml)),
      catchError(error => of(error))
    );
  }
}
