import { useEffect } from "react";
import PagesIndex from "../../container/PagesIndex";

export default function GoToTop() {
  const routePath = PagesIndex.useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}
