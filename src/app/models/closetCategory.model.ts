import { ClosetItems } from './closetItems.model';





export interface ClosetCategory {
  id: number;
  title: string;
  image: string;
  groupType?: number | null;
  projectType: number;
  isActive: boolean;
  parentCategoryId?: number | null;
  subCategories?: ClosetCategory[];
  items?: ClosetItems[];
}