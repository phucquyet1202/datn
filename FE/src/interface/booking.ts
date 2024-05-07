import { IRoom, IUser } from ".";

export interface IBooking {
  _id: string;
  id_user: IUser;
  check_in: string;
  success: boolean;
  check_out: string;
  total_price: number;
  payment_method: string;
  id_amenities: any;
  room_number: any;
  list_room: IRoomBooking[];
  status: string;
  payment_status: boolean;
  createdAt: string;
  updatedAt: string;
  id_payment: IPaymentBooking;
  is_deposit_amount: boolean;
  info: {
    name: string;
    phone: string;
    cmt: string;
  };
}

export interface IRoomBooking {
  idRoom: IRoom;
  quantity: number;
}

export interface IPaymentBooking {
  _id: string;
  id_booking: string;
  total_payment: number;
  amount: number;
  code: string;
  status: string;
  createdAt: string;
  url_payment: string;
  updatedAt: string;
}
