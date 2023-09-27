import { User } from '@/types'
import {defaultUserStore} from '@/mock/User'
export default () =>{
    const fetchUser = async (username: User["userName"]) => { 
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'mor_2314', password: '83r5^_' })
        })
        const user = await response.json()
        const pic = defaultUserStore.find((e: User) => e.userName == username)
        console.log("pic", pic)
        return pic
    }
    return {fetchUser}
}