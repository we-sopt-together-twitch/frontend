import styled, { css } from "styled-components";
import { LiveThumbnail } from "../../common/LiveThumbnail";
import { BroadcastTags } from "./BroadcastTags";

interface BroadcastCardProps {
  title: string;
  summary: string;
  tags?: string[];

  compact?: boolean;
}

export function BroadcastCard(props: BroadcastCardProps) {
  const { title, summary, tags = [], compact = false } = props;

  return (
    <StyledBroadcastCard compact={compact}>
      <BroadcastLiveThumbnail />
      <ContentBox compact={compact}>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <BroadcastTags tags={tags} />
      </ContentBox>
    </StyledBroadcastCard>
  );
}

const StyledBroadcastCard = styled.div<{ compact: boolean }>`
  height: 100%;
  width: 100%;

  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background-color: white;

  ${({ compact }) =>
    compact
      ? ""
      : css`
          padding: 0.7em;
        `};
`;

const BroadcastLiveThumbnail = styled(LiveThumbnail)`
  width: 100%;
  padding-top: 56.25%;

  flex-grow: 1;
`;

const ContentBox = styled.div<{ compact: boolean }>`
  ${({ compact }) =>
    compact
      ? css`
          margin: 0 0.7em;
          margin-bottom: 0.7em;
        `
      : css``};
`;

const Title = styled.h3`
  font-size: 1.3em;
  font-weight: 600;

  margin-top: 0.8em;
`;

const Summary = styled.p`
  margin-top: 0.7em;

  height: 3.5em;
`;
