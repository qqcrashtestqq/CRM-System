export interface IAuth {
  login: ILogin
  form: IForm
  status: boolean
}
interface ILogin {
  email: string
  password: string
}
interface IForm {
  email: string
  password: string
}
