import { enquireScreen } from 'enquire-js';
import { useEffect, useState } from 'react';

let isMobileConfig;
enquireScreen((b) => {
  isMobileConfig = b;
});

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(isMobileConfig);
  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
  }, []);

  return isMobile;
};

export default useMobile;
