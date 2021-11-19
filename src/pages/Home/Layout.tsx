import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { displaySize } from "../../styles/responsive";

export interface HomeLayoutProps {
  explore: ReactNode;
  recommanded: ReactNode;
  hotLive: ReactNode;
  browseLive: ReactNode;
}

export function HomeLayout(props: HomeLayoutProps) {
  const { explore, recommanded, hotLive, browseLive } = props;

  return (
    <StyledHomeLayout>
      <ExploreSlot>{explore}</ExploreSlot>
      <RecommandedSlot>{recommanded}</RecommandedSlot>
      <HotLiveSlot>{hotLive}</HotLiveSlot>
      <BrowseLiveSlot>{browseLive}</BrowseLiveSlot>
    </StyledHomeLayout>
  );
}

const contentWidth = css`
  & > * {
    margin: 0 auto;

    ${displaySize("desktop")} {
      width: 780px;
    }

    ${displaySize("tablet")} {
      width: unset;
    }

    ${displaySize("mobile")} {
      width: unset;
    }
  }
`;

const StyledHomeLayout = styled.div``;

const ExploreSlot = styled.div`
  margin-bottom: 9rem;
`;

const RecommandedSlot = styled.div`
  background-color: #ffffff;
  margin-top: 9.5rem;
  margin-bottom: 9rem;

  ${contentWidth}
`;

const HotLiveSlot = styled.div`
  background-color: #fafafa;

  ${contentWidth}
`;

const BrowseLiveSlot = styled.div`
  background-color: #f5f5f5;

  padding-top: 9.5rem;
  padding-bottom: 18rem;

  ${contentWidth}
`;
