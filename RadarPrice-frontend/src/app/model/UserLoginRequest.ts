import { Products } from "./Products"

export interface UserLoginRequest{
    email: string,
    password: string,
    userProducts: Array<Products>
}