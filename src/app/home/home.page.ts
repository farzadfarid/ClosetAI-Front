import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { ClosetCategoryService } from '../services/closet-category';
import { ResponseClosetCategory } from '../models/categoryResponse.model';
import { environment } from 'src/environments/environment.prod';
import { GroupType } from '../models/groupType.enum';
import { LoadingComponent } from "../Core/Components/loading/loading.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
   imports: [IonTitle, IonToolbar, IonHeader, IonContent, IonCard, IonCardHeader, IonCardTitle, LoadingComponent, IonRefresher, IonRefresherContent],
})
export class HomePage {
 constructor(private router: Router,private service:ClosetCategoryService) {}


 isLoading = false;
goToPage(categoryId: number) {
  switch (categoryId) {
    case GroupType.Men:
      this.router.navigate(['/outfit']);
      break;

    case GroupType.Women:
      this.router.navigate(['/outfit-women']);
      break;

    case GroupType.Boy:
      this.router.navigate(['/outfit-boy']);
      break;

    case GroupType.Girl:
      this.router.navigate(['/outfit-girl']);
      break;

    case GroupType.Atelier:
      this.router.navigate(['/atelier']);
      break;

    default:
      console.log('Unknown category:', categoryId);
      break;
  }
}

 
 imageBaseUrl=environment.imageUrl;

  categories: ResponseClosetCategory[] = [];

ngOnInit() {
  this.isLoading = true;
  this.service.getRootCategory().subscribe((categories) => {
    console.log('Root Categories:', categories);
    this.isLoading = false;
    // اصلاح مسیرها
    this.fixImagePaths(categories, this.imageBaseUrl);

    this.categories = categories;
  });
}



  private fixImagePaths(categories: ResponseClosetCategory[], baseUrl: string) {
  categories.forEach(cat => {
    // اصلاح مسیر عکس دسته
    cat.image = baseUrl + cat.image;

    // اگر آیتم دارد → اصلاح مسیر آیتم‌ها
    if (cat.items) {
      cat.items = cat.items.map(item => ({
        ...item,
        image: baseUrl + item.image
      }));
    }

    // اگر زیرگروه دارد → فراخوانی بازگشتی
    if (cat.subCategories && cat.subCategories.length > 0) {
      this.fixImagePaths(cat.subCategories, baseUrl);
    }
  });
}

handleRefresh(event: any) {
  // بارگذاری مجدد دسته‌بندی‌ها
  this.isLoading = true;
  this.service.getRootCategory().subscribe(
    (categories) => {
      console.log('Root Categories refreshed:', categories);
      this.fixImagePaths(categories, this.imageBaseUrl);
      this.categories = categories;
      this.isLoading = false;

      // پایان رفرش
      setTimeout(() => {
        event.target.complete();
      }, 500);
    },
    (error) => {
      console.error('Error refreshing categories:', error);
      this.isLoading = false;
      event.target.complete();
    }
  );
}


}
