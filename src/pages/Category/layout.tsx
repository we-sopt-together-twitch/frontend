import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { layout } from "../../styles/layout";

interface CategoryLayoutProps {
  broadcastCategory: ReactNode;
}

export function CategoryLayout(props: CategoryLayoutProps) {
  const { broadcastCategory } = props;

  return (
    <StyledCategoryLayout>
      <BroadcastCategorySlot>
        <Title>방송 카테고리</Title>
        {broadcastCategory}
      </BroadcastCategorySlot>
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

const StyledCategoryLayout = styled.div`
  ${contentWidth}
`;

const BroadcastCategorySlot = styled.div`
  margin-top: 8rem;
  margin-bottom: 9rem;
`;

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 5rem;

  font-weight: 600;
`;
