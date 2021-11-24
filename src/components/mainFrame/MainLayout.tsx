import { ReactNode } from "react";
import styled from "styled-components";
import { layout } from "../../styles/layout";

interface MainLayoutProps {
  topNav: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  const { content, footer, topNav } = props;

  return (
    <StyledMainLayout>
      <TopNavSlot>{topNav}</TopNavSlot>
      <ContentAreaSlot>{content}</ContentAreaSlot>
      <FooterSlot>{footer}</FooterSlot>
    </StyledMainLayout>
  );
}

const StyledMainLayout = styled.div``;

const TopNavSlot = styled.div`
  width: 100%;
  max-width: ${layout.maxContentWidth};
  margin: 0 auto;
`;

const ContentAreaSlot = styled.div``;

const FooterSlot = styled.div`
  padding: 8.6rem 0;
  background-color: #f5f5f5;

  border-top: 1px solid #9f9f9f;
`;
