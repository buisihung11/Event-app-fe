import React, { useEffect } from 'react';
import { usePrevious } from '../hooks/usePrevious';

const ScrollToTop = (props) => {
  console.log(props);
  const { location } = props;
  const prevLocation = usePrevious(location);

  useEffect(() => {
    if (location?.pathname !== prevLocation?.pathname) {
      window.scrollTo(0, 0);
    }
  }, []);

  console.log('prevLocation', prevLocation);

  return <div {...props}>{props.children}</div>;
};

export default ScrollToTop;
