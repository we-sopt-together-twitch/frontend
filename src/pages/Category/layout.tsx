import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { layout } from "../../styles/layout";

interface CategoryLayoutProps {
  broadcastCategory: ReactNode;
  liveChannels: ReactNode;
}

export function CategoryLayout(props: CategoryLayoutProps) {
  const { broadcastCategory, liveChannels } = props;

  return (
    <StyledCategoryLayout>
      <BroadcastCategorySlot>
        <Title>방송 카테고리</Title>
        {broadcastCategory}
      </BroadcastCategorySlot>
      <LiveChannelsSlot>
        <Title>생방송 채널</Title>
        {liveChannels}
      </LiveChannelsSlot>
    </StyledCategoryLayout>
  );
}

const contentWidth = css`
  & > * {
    margin: 0 auto;

    width: 100%;
    max-width: ${layout.maxContentWidth};
  }
`;

const StyledCategoryLayout = styled.div``;

const BroadcastCategorySlot = styled.div`
  padding-top: 8rem;
  padding-bottom: 9rem;

  ${contentWidth}
`;

const LiveChannelsSlot = styled.div`
  padding-top: 9.5rem;
  padding-bottom: 6rem;

  background-color: #f9f9f9;

  ${contentWidth}
`;

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 5rem;

  font-weight: 600;
`;
