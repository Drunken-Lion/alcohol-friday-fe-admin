import { FileInfo } from '../file';
import { PageInfo } from '../page';

export interface Restaurant {
  id: number;
  memberNickname: string;
  name: string;
  category: string;
  businessName?: string;
  businessNumber?: string;
  createdAt: string;
  deleted: boolean;
}

export interface RestaurantDetail {
  id: number;
  memberId: number;
  memberNickname: string;
  name: string;
  category: string;
  address: string;
  latitude: number;
  longitude: number;
  contact: number;
  businessName?: string;
  businessNumber?: string;
  menu: Record<string, string>;
  time: Time;
  provision: Record<string, boolean>;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  stockProductInfos: StockProductInfo[];
}

export interface AllRestaurantResponse {
  data: Restaurant[];
  pageInfo: PageInfo;
}

export interface Time {
  etc: string;
  holiday: boolean;
  MONDAY: OperatingHourAndStatus;
  TUESDAY: OperatingHourAndStatus;
  WEDNESDAY: OperatingHourAndStatus;
  THURSDAY: OperatingHourAndStatus;
  FRIDAY: OperatingHourAndStatus;
  SATURDAY: OperatingHourAndStatus;
  SUNDAY: OperatingHourAndStatus;
}

export interface OperatingHourAndStatus {
  endTime: number[];
  startTime: number[];
  breakStartTime: number[];
  breakEndTime: number[];
  businessStatus: boolean;
  breakBusinessStatus: boolean;
}

export interface StockProductInfo {
  stockProductId: number;
  stockProductName: string;
  stockQuantity: number;
  stockProductFile: FileInfo;
}
