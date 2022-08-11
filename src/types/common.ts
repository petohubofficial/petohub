export interface Response {
  success: boolean;
  data?: any;
  error?: string;
}

export interface PaginatedResponse<T> {
  total: number;
  pages: number;
  results: T[];
  next: { page: number; limit: number };
  prev: { page: number; limit: number };
}
