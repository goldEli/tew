import React, { useEffect } from "react"

export default function useImgHook(
  selectors: string,
  callback?: (entries: IntersectionObserverEntry[]) => void,
  watch?: any[],
) {
  useEffect(() => {

    let observer = new IntersectionObserver((entries) => {
      console.log(entries)
      if (entries.length) {
        entries.forEach(entry => {
          if (entry.intersectionRatio) {
            const dom = entry.target
            const imgSrc = dom.getAttribute("data-src") || ""
            dom.setAttribute("src", imgSrc)
            observer.unobserve(dom)
          }
        })
      }
      callback && callback(entries)
    });
    const elements = document.querySelectorAll(selectors)
    if (elements?.length) {
      elements.forEach(element => {
        observer.observe(element)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, watch)
}