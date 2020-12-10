import React, { useEffect } from "react"
// let observer: IntersectionObserver | undefined
export default function useObserverHook(
  eleId: string,
  callback: (entries: IntersectionObserverEntry[]) => void
) {
  useEffect(() => {

    let observer = new IntersectionObserver((entries) => {
      callback && callback(entries)
    });
    const element = document.querySelector("#" + eleId) as HTMLElement
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
        observer.disconnect()
      }
    }
  })
}