import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ClosetItems as ClosetItemsModel } from 'src/app/models/closetItems.model';

@Injectable({
  providedIn: 'root'
})
export class ClosetItemsService {
    private apiUrl = `${environment.imageUrl}/api/styleitem`;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<ClosetItemsModel> {
    return this.http.get<ClosetItemsModel>(`${this.apiUrl}/${id}`);
  }

  getByCategory(categoryId: number): Observable<ClosetItemsModel[]> {
    return this.http.get<ClosetItemsModel[]>(`${this.apiUrl}/category/${categoryId}`);
  }
}
