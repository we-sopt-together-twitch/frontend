import styled, { css } from "styled-components";
import { LiveThumbnail } from "../../common/LiveThumbnail";
import { HotLiveTags } from "./HotLiveTags";
import { HotLiveKinds } from "./HotLiveKinds";
import { ProfileImg } from "./ProfileImg";

interface HotLiveCardProps {
  title: string;
  category: string;
  tags: string[];
  kinds: string[];
  host: {
    profileImage: string;
  };
  thumbnailImage: string;

  compact?: boolean;
}

export const HotLiveCard = (props: HotLiveCardProps) => {
  const { title, category, tags = [], kinds = [], thumbnailImage, host = {}, compact = false } = props;
  return (
    <StyledHotLiveCard compact={compact}>
      <BroadcastLiveThumbnail>
        <img src={thumbnailImage} />
      </BroadcastLiveThumbnail>
      <ContentBox>
        <LeftBox>
          <ProfileImg host={host} />
        </LeftBox>
        <RightBox compact={compact}>
          <Title>
            <div>{title}</div>
          </Title>
          <Category>{category}</Category>
          <HotLiveKinds kinds={kinds} />
          <HotLiveTags tags={tags} />
        </RightBox>
      </ContentBox>
    </StyledHotLiveCard>
  );
};

const StyledHotLiveCard = styled.div<{ compact: boolean }>`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${({ compact }) =>
    compact
      ? ""
      : css`
          padding: 1.3em;
        `};
`;
const BroadcastLiveThumbnail = styled(LiveThumbnail)`
  width: 100%;
  padding-top: 56.25%;

  flex-grow: 1;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 2.1em;
`;

const LeftBox = styled.div``;
const RightBox = styled.div<{ compact: boolean }>`
  ${({ compact }) =>
    compact
      ? css`
          margin: 0 0.7em;
          margin-bottom: 0.7em;
        `
      : css``};
`;

const Title = styled.h3`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: bold;
  font-size: 2.2em;
  color: #0e0e10;
  line-height: 1.4em;

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

const Category = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8em;
  line-height: 1.1em;
  color: #615a64;

  display: inline-block;
  width: 100%;
  margin-top: 0.3em;
`;
