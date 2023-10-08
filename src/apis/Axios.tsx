import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import axios from "axios";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_KEY}`,
  timeout: 3000,
})

instance.interceptors.request.use(
  res => {
    const token = cookie.get("accessToken");
    if(token !== undefined) res.headers.Authorization = cookie.get("accessToken");
    return res;
  }, 
  err => {
    toast.error("오류가 발생헀습니다");
    return Promise.reject(err);
  }
)

instance.interceptors.response.use(
  res => { return res }, 
  err => { 
    toast.error(<>
      <b>오류가 발생했습니다</b> 
      <br />
      <code>{err.response.data.message}</code>
    </>) 
    return Promise.reject(err);
  }
)