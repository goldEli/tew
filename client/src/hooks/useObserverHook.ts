import React, { useEffect } from "react"
// let observer: IntersectionObserver | undefined
export default function useObserverHook(
  selectors: string,
  callback: (entries: IntersectionObserverEntry[]) => void,
  watch?: any[],
) {
  useEffect(() => {

    let observer = new IntersectionObserver((entries) => {
      callback && callback(entries)
    });
    const element = document.querySelector(selectors) as HTMLElement
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
        observer.disconnect()
      }
    }
  }, watch)
}