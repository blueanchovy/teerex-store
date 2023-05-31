import { useEffect, useState } from "react";

export default function useMobile() {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(
    window.matchMedia("(max-width: 1023px)").matches
  );
  const [isMobileOrSmaller, setIsMobileOrSmaller] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.matchMedia("(max-width: 1023px)").matches);
      setIsMobileOrSmaller(window.matchMedia("(max-width: 767px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isTabletOrSmaller,
    isMobileOrSmaller,
  };
}
