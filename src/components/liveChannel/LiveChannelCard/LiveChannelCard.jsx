import styled, { css } from "styled-components";
import { LiveThumbnail } from "../../common/LiveThumbnail";
import { LiveChannelTags } from "./LiveChannelTags";

export function LiveChannelCard(props) {
  const { title, tags, thumbnailImage, nowWatchingCount, host, compact = false } = props;

  return (
    <StyledBroadcastCard compact={compact}>
      <BroadcastLiveThumbnail>
        <img src={thumbnailImage} />
      </BroadcastLiveThumbnail>
      <ContentBox compact={compact}>
        <HostProfileImg>
          <img src={host.profileImage} />
        </HostProfileImg>
        <TextBox>
          <Title>
            <div>{title}</div>
          </Title>
          <Summary>
            {`${host.name}(${host.id})`}
            <Watching>{(nowWatchingCount * 0.0001).toFixed(1)}만 명 </Watching> 시청중
          </Summary>
        </TextBox>
      </ContentBox>
      <LiveChannelTags tags={tags} />
    </StyledBroadcastCard>
  );
}

const StyledBroadcastCard = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const BroadcastLiveThumbnail = styled(LiveThumbnail)`
  width: 100%;
  padding-top: 56.25%;

  flex-grow: 1;
`;

const HostProfileImg = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 0.8rem;
  height: 4.2rem;
  width: 4.2rem;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  flex-grow: 0;
  margin: 0rem 0.5rem;

  ${({ compact }) =>
    compact
      ? css`
          margin: 0 0.7em;
          margin-bottom: 0.7em;
        `
      : css``};
`;

const TextBox = styled.div`
  margin-left: 0.4rem;
  flex-direction: row;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  line-height: 1.8rem;

  font-weight: 600;

  margin-top: 0.8em;
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

  right: 60.49%;
  top: 85.28%;
  bottom: 11.49%;

  font-size: 1.4rem;
  line-height: 1.8rem;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #424347;
`;

const Watching = styled.p`
  margin-left: 0.9rem;

  font-weight: bold;
`;
