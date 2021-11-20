import styled from "styled-components";

export function ProfileImg(props) {
  const { host } = props;
  return (
    <StyledHotLives>
      <ImgWrapper>
        <img src={host.profileImage} />
      </ImgWrapper>
      <LiveIcon>LIVE</LiveIcon>
    </StyledHotLives>
  );
}

const StyledHotLives = styled.div`
  position: relative;
  margin-right: 1.2em;
`;

const ImgWrapper = styled.div`
  width: 5.8rem;
  height: 5.8rem;
  border: none;
  border-radius: 50%;
  overflow: hidden;

  & > * {
    width: 100%;
    object-fit: cover;
  }
`;

const LiveIcon = styled.div`
  position: absolute;
  top: 90%;
  left: 11%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.2rem 1.1rem;
  background: #772ce8;
  border-radius: 0.5em;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  color: #fefdff;
`;
