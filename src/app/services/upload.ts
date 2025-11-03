import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

export interface UploadResponse {
  original: string;
  processed?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  uploadImage(file: File, prompt: string): Observable<UploadResponse> {
    // 🧹 Sanitize prompt to prevent encoding issues
    const safePrompt = this.sanitizePrompt(prompt);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('prompt', safePrompt);

    return this.http.post<UploadResponse>(this.apiUrl, formData).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  private sanitizePrompt(prompt: string): string {
    return prompt
      .replace(/[\u2010-\u2015]/g, '-')         // dash
      .replace(/[\u2018\u2019]/g, "'")          // quotes
      .replace(/[\u201C\u201D]/g, '"')          // double quotes
      .replace(/\u00A0/g, ' ')                  // nbsp
      .replace(/[^\x00-\x7F]/g, ' ')            // remove non-ascii
      .replace(/\r?\n|\r/g, ' ')                // remove newlines
      .replace(/\s+/g, ' ')                     // compress spaces
      .trim()
      .slice(0, 1200);                          // safe length
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'An unknown error occurred while uploading.';
    if (error.error instanceof ErrorEvent) {
      message = `Client Error: ${error.error.message}`;
    } else {
      message = `Server Error ${error.status}: ${error.statusText || error.message}`;
    }
    console.error('[UploadService Error]', message, error);
    return throwError(() => new Error(message));
  }
}
