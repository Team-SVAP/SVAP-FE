import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import { postRefresh } from "./User";

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
    const {
      config,
      response: { status },
    } = err;
    if(status === 401 || status === 403) {
      const token = cookie.get("refreshToken");
      postRefresh(token).then(() => {
        return axios(config);
      })
    }
    else {
      toast.error(<>
        <b>오류가 발생했습니다</b> 
        <br />
        <code>{err.response.data.error || err.response.data.message}</code>
      </>) 
      return Promise.reject(err);
    }
  }
)