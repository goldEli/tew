import { Toast } from 'antd-mobile';
import { IHttpOptions } from "@/type";


export default function http<T>({
  url,
  method = 'post',
  headers,
  body = {},
  setLoading,
  setResult,
}: IHttpOptions<T> & {
  setLoading?: Function,
  setResult?: Function
}) {
  setLoading && setLoading(true);

  let params: RequestInit
  const defaultHeaders: {[key:string]: string} = {
    'Content-Type': 'application/json',
  }
  const token = localStorage.getItem("token")
  if (token) {
    defaultHeaders['token'] = token
  }
  if (!(method.toUpperCase() === 'GET')) {
    params = {
      headers: {
        ...defaultHeaders,
        ...headers
      },
      method,
      body: JSON.stringify(body)
    }
    console.log(params)
  }

  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then(res => res.json())
      .then(res => {
        if (res.status === 1001) {
          location.href = "#/login"
          localStorage.clear()
        }
        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else {
          Toast.fail(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch(err => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      })
  });
}