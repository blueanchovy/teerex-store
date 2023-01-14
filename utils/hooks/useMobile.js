import useMediaQuery from "@mui/material/useMediaQuery";

export default function useMobile() {
  const isTabletOrSmaller = useMediaQuery("(max-width:1023px)");
  const isMobileOrSmaller = useMediaQuery("(max-width:767px)");

  return {
    isTabletOrSmaller,
    isMobileOrSmaller,
  };
}
