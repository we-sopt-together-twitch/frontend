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
      <BroadcastCategorySlot>{broadcastCategory}</BroadcastCategorySlot>
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

const BroadcastCategorySlot = styled.div``;
