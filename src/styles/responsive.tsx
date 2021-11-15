import { ReactElement, useEffect, useState } from "react";

const breakpoints = {
  mobile: "768px",
  tablet: "1023px",
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
 * styled-components 안에 넣어 사용하는
 * @param device 대상 디바이스 사이즈
 */
export function displaySize(device: BreakpointNames) {
  return `@media ${buildMediaQuery(breakpoints[device])}`;
}

interface SwitchDisplayProps {
  desktop: ReactElement;
  tablet?: ReactElement;
  mobile?: ReactElement;
}

export function SwitchDisplay(props: SwitchDisplayProps): ReactElement {
  const display = useDisplaySizeChange();

  if (props.mobile && display.size === "mobile") {
    return props.mobile;
  }
  if (props.tablet && display.size === "tablet") {
    {
      return props.tablet;
    }
  }
  return props.desktop;
}

export function useDisplaySizeChange() {
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

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return { size: display };
}
