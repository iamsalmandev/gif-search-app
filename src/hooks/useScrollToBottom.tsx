import { useEffect } from "react";


export const useScrollToBottom = (onScrollEnd: () => void) => {

    useEffect(
        () => {
            const trackScrolling = () => {

                if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
                    return;
                }
                onScrollEnd()
            }
            document.addEventListener('scroll', trackScrolling);
            return () => document.removeEventListener('scroll', trackScrolling);
        },
        [])

}