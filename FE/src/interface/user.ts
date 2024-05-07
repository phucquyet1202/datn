export interface IInformation {
  _id: string;
  name: string;
  phone: string;
  address: string;
  birthday: string;
  sex: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  email: string;
  isLockAccount: boolean;
  role: string;
  id_information: IInformation;
  createdAt: string;
  updatedAt: string;
}
