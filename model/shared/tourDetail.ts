import { TourSummary } from "./tourSummary";
import { Review } from "./reviews";

export class TourDetail extends TourSummary {
  tourCategory: string
  tourDescription: string
  price: number
  currency: string
  reviews: Review[]
  img: string[]
  constructor(tourData: any, reviewData: any, tourImages: string[]) {
    super(tourData);
    this.tourCategory = tourData.tourCategory;
    this.tourDescription = tourData.tourDescription;
    this.price = tourData.price;
    this.currency = tourData.currency;
    this.img = tourImages;
    this.reviews = reviewData.map((item: any) => new Review(item));
  }
}