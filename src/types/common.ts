export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};






export interface IPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  from: string;
  to: string;
  status: string;
  packageImage: string;
  maxUser: number;
  destination: string;
  packageReviewAndRating: IpackageReviewAndRating;
  bookedPackage: IBookPackage[];
  addToCartPackage: IAddToCartPackage[];
}

export interface IpackageReviewAndRating {
  id: string
  review: string;
  rating: string;
  userId: string;
  package: string;
}

export interface IFaq {
  id: string;
  title: string;
  description: string;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
}

export interface IBookPackage {
  id: string;
  userId: string;
  packageId: string;
  package: IPackage;
  user: IUser;
}

export interface IAddToCartPackage {
  id: string;
  userId: string;
  packageId: string;
  package: IPackage;
}