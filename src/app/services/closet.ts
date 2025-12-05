import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { MenPromptInput } from '../models/menPromptInput.model';
import { Observable } from 'rxjs';
import { WomenPromptInput } from '../models/womenPromptInput.model';
import { BoyPromptInput } from '../models/boyPromptInput.model';
import { GirlPromptInput } from '../models/girlPromptInput.model';
import { AtelierPromptInput } from '../models/atelierPromptInput.model';

@Injectable({
  providedIn: 'root'
})
export class Closet {
  
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  
  // 🔹 ارسال عکس + FaceSelections برای Face Component
uploadMenData(file: File, data: MenPromptInput | string): Observable<any> {
    const formData = new FormData();

    // عکس دست کاربر
    formData.append('file', file);

    // اگر string باشد (پرامپت قدیمی)، به صورت prompt ارسال کن
    if (typeof data === 'string') {
      formData.append('prompt', data);
    } else {
      // FaceSelections را تخت‌کنی کن
      this.flattenDataSelections(data, 'data', formData);

      // colorPalettes رو مستقیما بفرست (نه داخل data.)
      if (data.colorPalettes) {
        formData.append('colorPalettes', data.colorPalettes);
      }

      // isCreativeMode رو مستقیما بفرست
      formData.append('isCreativeMode', (data as any).isCreativeMode ? 'true' : 'false');
      // itemIds رو مستقیما بفرست (به صورت علی‌الترتیب)
      if (data.itemIds && data.itemIds.length > 0) {
        data.itemIds.forEach((id, index) => {
          formData.append(`itemIds[${index}]`, id.toString());
        });
      }
    }
      console.log('FormData for upload:', formData);
    return this.http.post(`${this.apiUrl}/upload-men`, formData);
  }

uploadWomenenData(file: File, data: WomenPromptInput | string): Observable<any> {
    const formData = new FormData();

    // عکس دست کاربر
    formData.append('file', file);

    // اگر string باشد (پرامپت قدیمی)، به صورت prompt ارسال کن
    if (typeof data === 'string') {
      formData.append('prompt', data);
    } else {
      // FaceSelections را تخت‌کنی کن
      console.log('📤 About to send WomenPromptInput:', data);
      this.flattenDataSelections(data, 'data', formData);

      // colorPalettes رو مستقیما بفرست (نه داخل data.)
      if (data.colorPalettes) {
        formData.append('colorPalettes', data.colorPalettes);
      }

      // isCreativeMode رو مستقیما بفرست (نه داخل data.)
      formData.append('isCreativeMode', (data as any).isCreativeMode ? 'true' : 'false');
      // itemIds رو مستقیما بفرست (به صورت علی‌الترتیب)
      if (data.itemIds && data.itemIds.length > 0) {
        data.itemIds.forEach((id, index) => {
          formData.append(`itemIds[${index}]`, id.toString());
        });
      }
    }
      console.log('📤 FormData for women upload - isCreativeMode:', (data as any)?.isCreativeMode);
    return this.http.post(`${this.apiUrl}/upload-women`, formData);
  }

uploadBoyData(file: File, data: BoyPromptInput | string): Observable<any> {
    const formData = new FormData();

    // عکس دست کاربر
    formData.append('file', file);

    // اگر string باشد (پرامپت قدیمی)، به صورت prompt ارسال کن
    if (typeof data === 'string') {
      formData.append('prompt', data);
    } else {
      // FaceSelections را تخت‌کنی کن
      this.flattenDataSelections(data, 'data', formData);

      // colorPalettes رو مستقیما بفرست (نه داخل data.)
      if (data.colorPalettes) {
        formData.append('colorPalettes', data.colorPalettes);
      }

      // isCreativeMode رو مستقیما بفرست
      formData.append('isCreativeMode', (data as any).isCreativeMode ? 'true' : 'false');
      // itemIds رو مستقیما بفرست (به صورت علی‌الترتیب)
      if (data.itemIds && data.itemIds.length > 0) {
        data.itemIds.forEach((id, index) => {
          formData.append(`itemIds[${index}]`, id.toString());
        });
      }
    }
      console.log('FormData for upload:', formData);
    return this.http.post(`${this.apiUrl}/upload-boy`, formData);
  }

uploadGirlData(file: File, data: GirlPromptInput | string): Observable<any> {
    const formData = new FormData();

    // عکس دست کاربر
    formData.append('file', file);

    // اگر string باشد (پرامپت قدیمی)، به صورت prompt ارسال کن
    if (typeof data === 'string') {
      formData.append('prompt', data);
    } else {
      // FaceSelections را تخت‌کنی کن
      this.flattenDataSelections(data, 'data', formData);

      // colorPalettes رو مستقیما بفرست (نه داخل data.)
      if (data.colorPalettes) {
        formData.append('colorPalettes', data.colorPalettes);
      }

      // isCreativeMode رو مستقیما بفرست
      formData.append('isCreativeMode', (data as any).isCreativeMode ? 'true' : 'false');
      // itemIds رو مستقیما بفرست (به صورت علی‌الترتیب)
      if (data.itemIds && data.itemIds.length > 0) {
        data.itemIds.forEach((id, index) => {
          formData.append(`itemIds[${index}]`, id.toString());
        });
      }
    }
      console.log('FormData for upload:', formData);
    return this.http.post(`${this.apiUrl}/upload-girl`, formData);
  }

uploadAtelierData(file: File, data: AtelierPromptInput | string): Observable<any> {
    const formData = new FormData();

    // عکس دست کاربر
    formData.append('file', file);

    // اگر string باشد (پرامپت قدیمی)، به صورت prompt ارسال کن
    if (typeof data === 'string') {
      formData.append('prompt', data);
    } else {
      // FaceSelections را تخت‌کنی کن
      this.flattenDataSelections(data, 'data', formData);
      // isCreativeMode رو مستقیما بفرست
      formData.append('isCreativeMode', (data as any).isCreativeMode ? 'true' : 'false');
      // itemId رو مستقیما بفرست (اگر موجود باشه)
      if (data.itemId && data.itemId > 0) {
        formData.append('itemId', data.itemId.toString());
      }
    }
      console.log('FormData for upload:', formData);
    return this.http.post(`${this.apiUrl}/upload-atelier`, formData);
  }






    private flattenDataSelections(obj: any, prefix: string, formData: FormData): void {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        // اگر null یا undefined باشه، skip کن
        if (value === null || value === undefined) continue;

        // اگر string و خالی باشه، skip کن
        if (typeof value === 'string' && value === '') continue;

        // برای لیست‌ها و اشیاء complex، JSON stringify کن
        if (typeof value === 'object' && !(value instanceof File)) {
          if (Array.isArray(value)) {
            // اگر آرایه خالی باشه، skip کن
            if (value.length === 0) continue;
            // لیست‌های ساده یا پیچیده رو JSON کن
            formData.append(`${prefix}.${key}`, JSON.stringify(value));
          } else {
            // اشیاء nested رو JSON کن (حتی اگر خالی باشند)
            formData.append(`${prefix}.${key}`, JSON.stringify(value));
          }
        } else if (typeof value === 'boolean') {
          // boolean مقادیر رو به "true" یا "false" تبدیل کن (نه به JSON)
          formData.append(`${prefix}.${key}`, value ? 'true' : 'false');
        } else {
          // مقادیر ساده رو مستقیم فرستاده
          formData.append(`${prefix}.${key}`, String(value));
        }
      }
    }
  }
}


 