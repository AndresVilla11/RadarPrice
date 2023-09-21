import { Products } from "./Products"

export interface UserLoginRequest{
    username: string,
    password: string,
    userProducts: Array<Products>
}