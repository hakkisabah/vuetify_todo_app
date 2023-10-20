import { useCookies } from "@vueuse/integrations/useCookies"
import { User } from "@/types"

const { get, getAll, set, remove, addChangeListener } = 
useCookies(['user'], { doNotParse: false, autoUpdateDependencies: false })
export default () => {
    const setUser = (user: User) => set('user', user)
    const getUser = () => get('user')
    const getAllCookies = () => getAll()
    const removeCookie = (cookieName: string) => remove(cookieName)

    const cookieChangeListener = ({name, value, options}) => {
        //console.log('The cookie ', name, ' changed to ', value, ' options ', options)
      }
  
      addChangeListener(cookieChangeListener);
    return { setUser, getUser, getAllCookies, removeCookie }
}

