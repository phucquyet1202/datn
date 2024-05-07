export interface IFeatures {
  name: string;
  surcharge: boolean;
}

export interface IAmenities {
  _id: string;
  name: string;
  features: IFeatures[];
  status: string;
  createdAt: string;
  updatedAt: string;
}
