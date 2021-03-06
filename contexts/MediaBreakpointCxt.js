/**
 * taken from https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
 */

import React, { useContext, useEffect, createContext, useState } from 'react'

const BreakpointContext = createContext({});

const BreakpointProvider = ({ children, queries}) => {

  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {})
      setQueryMatch(updatedMatches);
    }

    if(window && window.matchMedia) {
      const matches = {};
      keys.forEach(media => {
        if(typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false;
        }
      });

      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if(typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      });
    }

    return () => {
      if(isAttached) {
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    }
  }, [queries])

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if(context === {}) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
}

export {useBreakpoint, BreakpointProvider};