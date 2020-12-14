
import React, { useState } from "react"
import { IHttpOptions } from "@/type";
import { http } from "../utils";


export default function useHttpHook<T>(
  {
    url,
    method = "post",
    headers = {},
    body = {},
    watch = []
  }: IHttpOptions & { watch?: any[] }
): [T | undefined, boolean] {
  const [result, setResult] = React.useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  React.useEffect(() => {
    http({
      url,
      method,
      headers,
      body,
      setResult,
      setLoading
    });
  }, watch)

  return [result, loading]
}