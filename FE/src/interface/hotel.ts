import { IAmenities, IRoom } from ".";
export interface IImage {
  url: string;
}

export interface ICountry {
  code: number;
  codename: string;
  division_type: string;
  name: string;
  phone_code: number;
}

export interface IHotel {
  _id: string;
  name: string;
  images: IImage[];
  address: string;
  phone: string;
  status: string;
  email: string;
  description: string;
  city: string;
  id_amenities: IAmenities[];
  id_room: IRoom[];
  id_review: string[];
  createdAt: string;
  updatedAt: string;
}
