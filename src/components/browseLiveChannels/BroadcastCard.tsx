import styled from "styled-components";
import { LiveThumbnail } from "../common/LiveThumbnail";
import { BroadcastTags } from "./BroadcastTags";

interface BroadcastCardProps {
  title: string;
  summary: string;
  tags?: string[];
}

export function BroadcastCard(props: BroadcastCardProps) {
  const { title, summary, tags = [] } = props;

  return (
    <StyledBroadcastCard>
      <BroadcastLiveThumbnail />
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <BroadcastTags tags={tags} />
    </StyledBroadcastCard>
  );
}

const StyledBroadcastCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const BroadcastLiveThumbnail = styled(LiveThumbnail)`
  width: 100%;
  height: 8rem;

  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;

  margin-top: 0.8em;
`;

const Summary = styled.p`
  margin-top: 0.7em;

  height: 3.5em;
`;
