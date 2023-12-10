import { toast } from "react-toastify";
import axios from "axios";
import { Cookie } from "../utils/Utilities";
import { postRefresh } from "./User";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 3000,
})

instance.interceptors.request.use(
  res => {
    const token = Cookie.get("accessToken");
    if(token) res.headers.Authorization = `Bearer ${token}`;
    return res;
  }, 
  err => {
    toast.error(<b>오류가 발생헀습니다</b>);
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
    if(status === 403) {
      const token = Cookie.get("refreshToken");
      postRefresh(token).then(res => {
        Cookie.set("accessToken", res.data.access_token);
        config.headers.Authorization = `Bearer ${res.data.access_token}`;
        return axios(config);
      }).catch(() => {})
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