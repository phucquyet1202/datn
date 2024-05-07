import { IAmenities, IHotel, IImage, IRoomType } from ".";

export interface IRoom {
  _id: string;
  images: IImage[];
  quantity: number;
  price: number;
  status: string;
  description: string;
  id_amenities: IAmenities[];
  list_rooms: [];
  id_hotel: IHotel;
  id_roomType: IRoomType;
  createdAt: string;
  updatedAt: string;
}
