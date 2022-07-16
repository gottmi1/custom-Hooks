import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const inner = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", inner);

    // 위에 애드이벤트 리스너로 이벤트를 실행했기 떄문에 클린 업
    return () => {
      window.removeEventListener("resize", inner);
    };
  }, [width]);
  return width;
}
