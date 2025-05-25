export interface ICustomer {
  user: IUser[]
  pagination: IPagination
}

interface IUser {
  userName: string
  company: string
  phone: string
  email: string
  country: string
  status: boolean
}

interface IPagination {
  last: number
  next: number
  total: number
  page: number
}
