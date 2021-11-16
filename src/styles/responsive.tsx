import { ReactElement, ReactNode, useEffect, useState } from "react";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: null,
};

function buildMediaQuery(maxWidth: string | null): string {
  if (!maxWidth) {
    return `screen`;
  }
  return `screen and (max-width: ${maxWidth + ""})`;
}

function matchSize(device: BreakpointNames): boolean {
  return !!window.matchMedia(buildMediaQuery(breakpoints[device])).matches;
}

type BreakpointNames = keyof typeof breakpoints;

/**
 * styled-components 안에 넣어 사용하는 미디어 쿼리 조건문
 * @param device 대상 디바이스 사이즈
 */
export function displaySize(device: BreakpointNames) {
  return `@media ${buildMediaQuery(breakpoints[device])}`;
}

interface SwitchDisplayProps {
  desktop: ReactNode;
  tablet?: ReactNode;
  mobile?: ReactNode;
}

/**
 * 디스플레이 종류별 분기 렌더링을 해주는 컴포넌트
 */
export function SwitchDisplay(props: SwitchDisplayProps): ReactElement {
  const display = useDisplaySize();

  if (props.mobile && display.type === "mobile") {
    return <>{props.mobile}</>;
  }
  if (props.tablet && display.type === "tablet") {
    {
      return <>{props.tablet}</>;
    }
  }
  return <>{props.desktop}</>;
}

/**
 * 현재 디스플레이 종류를 알아오는 훅
 */
export function useDisplaySize() {
  const [display, setDisplay] = useState<BreakpointNames>("desktop");

  useEffect(() => {
    function handler() {
      if (matchSize("mobile")) {
        setDisplay("mobile");
      } else if (matchSize("tablet")) {
        setDisplay("tablet");
      } else {
        setDisplay("desktop");
      }
    }
    handler();

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return { type: display };
}
