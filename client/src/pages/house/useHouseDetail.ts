import React, { useState } from "react"
import { useHttpHook } from "@/hooks"

const initData = {
  detail: {},
  comments: []
}
export default function useHouseDetail() {
  const [data, loading] = useHttpHook({ url: "/house/detail", initData })

  return [data, loading]
}