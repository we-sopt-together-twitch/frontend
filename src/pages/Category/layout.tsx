import { ReactNode } from "react";
import styled from "styled-components";

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

const StyledCategoryLayout = styled.div``;

const BroadcastCategorySlot = styled.div``;
