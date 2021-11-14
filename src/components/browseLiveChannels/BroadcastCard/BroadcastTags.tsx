import styled from "styled-components";
import { colors } from "../../../styles/colors";

interface BroadcastTagsProps {
  className?: string;

  tags: string[];
}

export function BroadcastTags(props: BroadcastTagsProps) {
  const { tags = [] } = props;

  return (
    <StyledBroadcastTags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </StyledBroadcastTags>
  );
}

const StyledBroadcastTags = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.4em;
  }
`;

const Tag = styled.span`
  display: block;

  color: ${colors.primary};
`;
