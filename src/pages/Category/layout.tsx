import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { layout } from "../../styles/layout";
import { displaySize } from "../../styles/responsive";

interface CategoryLayoutProps {
  broadcastCategory: ReactNode;
  liveChannels: ReactNode;
}

export function CategoryLayout(props: CategoryLayoutProps) {
  const { broadcastCategory, liveChannels } = props;

  return (
    <StyledCategoryLayout>
      <ShadowDropper />
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

    padding-left: 4rem;
    padding-right: 4rem;

    ${displaySize("mobile")} {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

const StyledCategoryLayout = styled.div``;

const ShadowDropper = styled.div`
  width: 100%;
  box-shadow: 0px 14px 5px 10px rgba(0, 0, 0, 0.04), 0px 10px 10px 10px rgba(0, 0, 0, 0.08),
    0px 13px 4px 10px rgba(0, 0, 0, 0.1);
`;

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
