import { ClosetCategory } from './../models/closetCategory.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClosetCategoryService {
    private apiUrl = `${environment.imageUrl}/api/stylecategory/`;

  constructor(private http: HttpClient) { }


  getRootCategory(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'rootcategory', { params });
    }

    getAllMen(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'men', { params });
    }



    getAllWomenen(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'women', { params });
    }

    getAllBoy(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'boy', { params });
    }

    getAllGirl(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'girl', { params });
    }

    getAllAtelier(parentId: number | null = null): Observable<ClosetCategory[]> {
      let params = new HttpParams();
      if (parentId !== null) {
        params = params.set('parentId', parentId.toString());
      }
      return this.http.get<ClosetCategory[]>(this.apiUrl + 'atelier', { params });
    }
}
