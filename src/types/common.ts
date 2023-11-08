export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  status: number;
  data: any;
  meta?: IMeta;
};


export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IUser = {
  id: string;
  name: string;
  designation: string;
  experience: string;
  linkedIn?: string | null;
  github?: string | null;
  profileImg?: string | null;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;

  blogs: IBlog[]; // Assuming you have a Blog interface/type defined
  likedBlogs: ILike[]; // Assuming you have a Like interface/type defined
  reviews: IReview[]; // Assuming you have a Review interface/type defined
  readLater: IReadLater[]; // Assuming you have a ReadLater interface/type defined
};

export type IReview = {
  id: string;
  userId: string;
  blogId: string;
  text: string;
  createdAt: Date;

  user: IUser; // Assuming you have a User interface/type defined
  blog: IBlog; // Assuming you have a Blog interface/type defined
};

export type ISingleBlog = {};

export type IBlog = {
  id: string;
  title: string;
  thumbnailImg?: string | null;
  typeId: string;
  content: string;
  userId: string;
  review: IReview[];
  likes: ILike[];
  readLater: IReadLater[];
  createdAt: Date;
  updatedAt: Date;

  user: IUser;
  type: IBlogType;
};

export type IBlogType = {
  id: string;
  title: string;
  blog: IBlog[]; // Assuming you have a Blog interface/type defined
};

export type ILike = {
  id: string;
  userId: string;
  blogId: string;

  user: IUser; // Assuming you have a User interface/type defined
  blog: IBlog; // Assuming you have a Blog interface/type defined
};

export type IReadLater = {
  id: string;
  userId: string;
  blogId: string;

  user: IUser; // Assuming you have a User interface/type defined
  blog: IBlog; // Assuming you have a Blog interface/type defined
};
