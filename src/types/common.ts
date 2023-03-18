export interface Response<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  total: number;
  pages: number;
  results: T[];
  next: { page: number; limit: number };
  prev: { page: number; limit: number };
}
