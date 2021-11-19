import styled, { css } from "styled-components";
// import { LiveThumbnail } from "../../common/LiveThumbnail";
import { BroadcastCategoryTags } from "./BroadcastCategoryTags";
// import { BroadcastTags } from "./BroadcastTags";

export function BroadcastCategoryCard(props) {
  const { title, watching, tags, thumbnailImage, compact = false } = props;
  return (
    <StyledBroadcastCategoryCard compact={compact}>
      <BroadcastCategoryThumbnail>
        <img src={thumbnailImage} />
      </BroadcastCategoryThumbnail>
      <ContentBox compact={compact}>
        <Title>
          <div>{title}</div>
        </Title>
        <Summary>
          <Watching>{watching * 0.0001}만 명 </Watching> 시청중
        </Summary>
        <BroadcastCategoryTags tags={tags} />
      </ContentBox>
    </StyledBroadcastCategoryCard>
  );
}
const StyledBroadcastCategoryCard = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  background-color: white;

  ${({ compact }) =>
    compact
      ? ""
      : css`
          padding: 0em;
        `};
`;

const BroadcastCategoryThumbnail = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

const ContentBox = styled.div`
  background: #f1f1f1;
  ${({ compact }) =>
    compact
      ? css`
          margin: 0 0.7em;
          margin-bottom: 0.7em;
        `
      : css``};
`;

const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 3rem;

  font-weight: 600;

  margin-top: 2.3rem;
  margin-left: 2rem;

  width: 100%;

  display: table;
  table-layout: fixed;

  & > div {
    display: table-cell;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Summary = styled.p`
  margin-top: 0.6rem;
  font-size: 1.8em;
  left: 7.34%;
  margin-left: 2rem;

  right: 60.49%;
  top: 85.28%;
  bottom: 11.49%;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.8rem;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #424347;
`;

const Watching = styled.p`
  font-weight: bold;
`;
