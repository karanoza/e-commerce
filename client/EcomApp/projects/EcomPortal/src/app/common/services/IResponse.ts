export interface IResponse {
  status: string;
  message: string;
  data: any;
  role?: string;
  count?: number;
}
