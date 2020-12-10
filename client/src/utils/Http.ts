import { Toast } from 'antd-mobile';
import { IHttpOptions } from "@/type";


export default function Http({
  url,
  method = 'post',
  headers,
  body = {},
  setLoading,
  setResult,
}: IHttpOptions & {
  setLoading: Function,
  setResult: Function
}) {
  setLoading && setLoading(true);

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  let params: RequestInit
  if (!(method.toUpperCase() === 'GET')) {
    params = {
      headers: {
        ...requestHeaders,
        ...headers
      },
      method,
      body: JSON.stringify(body)
    }
  }

  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then(res => res.json())
      .then(res => {
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