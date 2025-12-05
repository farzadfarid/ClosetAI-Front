import { ClosetItems } from "./closetItems.model";

export interface ResponseClosetCategory {
  id: number;
  title: string;
  image: string;
  groupType?: number | null;   
  projectType: number;
  isActive: boolean;
  parentCategoryId?: number | null; 
  subCategories?: ResponseClosetCategory[] | null;
  items?: ClosetItems[];
}


