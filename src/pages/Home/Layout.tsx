import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { layout } from "../../styles/layout";
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
      <RecommandedSlot>
        <Title>추천 채널</Title>
        {recommanded}
      </RecommandedSlot>
      <HotLiveSlot>
        <Title>인기 라이브</Title>
        {hotLive}
      </HotLiveSlot>
      <BrowseLiveSlot>
        <Title>라이브 탐색</Title>
        {browseLive}
      </BrowseLiveSlot>
    </StyledHomeLayout>
  );
}

const contentWidth = css`
  & > * {
    margin: 0 auto;

    width: 100%;
    max-width: ${layout.maxContentWidth};

    padding-left: 4rem;
    padding-right: 4rem;

    ${displaySize("mobile")} {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

const StyledHomeLayout = styled.div``;

const ExploreSlot = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(119, 44, 232, 1) 30%,
    rgba(119, 44, 232, 1) 100%
  );
  padding-top: 9.5rem;
  padding-bottom: 9rem;

  ${contentWidth}
`;

const RecommandedSlot = styled.div`
  background-color: #ffffff;
  margin-top: 9.5rem;
  margin-bottom: 9rem;
  ${displaySize("mobile")} {
    width: 70rem;
  }

  ${contentWidth}
`;

const HotLiveSlot = styled.div`
  background-color: #fafafa;

  padding-top: 9.5rem;
  padding-bottom: 9rem;

  ${contentWidth}
`;

const BrowseLiveSlot = styled.div`
  background-color: #f5f5f5;

  padding-top: 9.5rem;
  padding-bottom: 18rem;

  ${contentWidth}
`;

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 5rem;

  font-weight: 600;
`;
