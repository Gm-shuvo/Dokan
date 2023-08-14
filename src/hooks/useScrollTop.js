// Desc: useScrollTop hook
//use scroll to top

import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [window.location.pathname]);

  return null;
}