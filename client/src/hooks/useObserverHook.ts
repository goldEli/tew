import React, { useEffect } from "react"

export default function useObserverHook(
  eleId: string,
  callback: (entries: IntersectionObserverEntry[]) => void
) {
  useEffect(() => {

    let observer = new IntersectionObserver((entries) => {
      callback && callback(entries)
    });
    const element = document.querySelector(eleId) as HTMLElement
    observer.observe(element)
    
    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [])
}