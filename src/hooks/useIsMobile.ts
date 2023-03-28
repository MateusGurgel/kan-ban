import { useState, useEffect } from "react";

const getIsMobile = () => window.innerWidth <= 768;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
