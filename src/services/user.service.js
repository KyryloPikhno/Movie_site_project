import {axiosService} from "./axios.service";
import {urls} from "../configs";


const userService ={
    getUser: ()=>axiosService(urls.user)
}

export {userService}