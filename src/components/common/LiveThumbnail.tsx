import { ReactNode } from "react";
import styled from "styled-components";

import { ReactComponent as LiveIcon } from "../../assets/icon/liveIcon.svg";

interface LiveThumbnailProps {
  className?: string;

  children?: ReactNode;
}

export function LiveThumbnail(props: LiveThumbnailProps) {
  const { children = <ContentPlaceHolder /> } = props;

  return (
    <StyledLiveThumbnail className={props.className}>
      <ContentLayer>{children}</ContentLayer>
      <GradientLayer />
      <IconLayer>
        <LiveIcon />
      </IconLayer>
    </StyledLiveThumbnail>
  );
}

const StyledLiveThumbnail = styled.div`
  position: relative;
`;

const ContentLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: transparent;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 100%);
`;

const IconLayer = styled.div`
  position: absolute;
  left: 0.7em;
  bottom: 0.8em;
`;

const ContentPlaceHolder = styled.div`
  width: 100%;
  height: 100%;

  background-color: lightgreen;
`;
