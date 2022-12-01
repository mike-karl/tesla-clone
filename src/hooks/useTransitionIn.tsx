import {useEffect, useState} from 'react'

const useTransitionIn = (isMounted: boolean, unmountDelay: number) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  
    useEffect(() => {
      let timeoutId: number;
  
      if (isMounted && !hasTransitionedIn) {
        timeoutId = setTimeout(() => setHasTransitionedIn(true), 750);
      } else if (!isMounted && hasTransitionedIn) {
        timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
      }
      return () => {
        clearTimeout(timeoutId);
      }
    }, [unmountDelay, isMounted, hasTransitionedIn]);
  
    return hasTransitionedIn;
  }

  export default useTransitionIn;