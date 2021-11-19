import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as LogoImage } from "../../assets/logo/logo.svg";

export function TopNav() {
  return (
    <StyledTopNav>
      <FlowHorizontal>
        <Logo></Logo>
        <LinkButton>팔로잉</LinkButton>
        <LinkButton>카테고리</LinkButton>
        <LinkButton>채널</LinkButton>
      </FlowHorizontal>
      <FlowHorizontal>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <ActionButton>로그인</ActionButton>
        <ActionButton variant="primary">회원가입</ActionButton>
      </FlowHorizontal>
    </StyledTopNav>
  );
}

const StyledTopNav = styled.div`
  display: flex;
  justify-content: space-between;

  height: 10rem;
`;

const FlowHorizontal = styled.div`
  display: flex;

  align-items: center;
`;

const Logo = styled(LogoImage)`
  margin-right: 2rem;
`;

const LinkButton = styled.button`
  font-size: 1.7rem;
  font-weight: 600;

  width: 13rem;

  border: none;
  background-color: transparent;
  outline: none;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  margin-right: 0.7rem;
`;

const ActionButton = styled.button<{ variant?: string }>`
  font-size: 1.7rem;

  border-radius: 7px;
  outline: none;
  border: none;

  height: 3.3rem;
  padding: 0 1rem;

  margin-right: 1.2rem;

  background-color: #e9e9e9;
  color: black;

  ${(props) => {
    if (props.variant === "primary") {
      return css`
        background-color: #772ce8;
        color: white;
      `;
    }
  }}
`;
