import {LoginCredentials, User} from "@/types";
import useUserStore from "@/store/user";
import { defaultUserStore } from "@/mock/User";
import cookie from "./cookies";
const cookies = cookie()


export default () =>{
    const {setUser, removeUser} = useUserStore()
    const login =  async (/*credentials: LoginCredentials,*/mockSelection?:number) => {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'mor_2314', password: '83r5^_' })
        })
        const user = await response.json()
        console.log("fakestoreapi.com", user)
        console.log("mockSelection", mockSelection)
        const u : User = mockSelection == 1 ? defaultUserStore[0]:defaultUserStore[1]
        cookies.setUser(u)
        setUser(u)
    }
    const logout = () => {
        cookies.removeCookie('user')
        removeUser()
    }
    return {login, logout}
}