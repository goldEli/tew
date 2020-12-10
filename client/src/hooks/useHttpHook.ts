
import React, { useState } from "react"
import { IHttpOptions } from "@/type";
import { Http } from "../utils";


export default function useHttpHook(
  {
    url,
    method = "post",
    headers = {},
    body = {},
    watch = []
  }: IHttpOptions & { watch: any[] }
) {
  const [result, setResult] = React.useState()
  const [loading, setLoading] = useState(true)
  React.useEffect(() => {
    Http({
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