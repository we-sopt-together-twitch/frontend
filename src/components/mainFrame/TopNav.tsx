import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as LogoImage } from "../../assets/logo/logo.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icon/downArrow.svg";
import { NavLink } from "react-router-dom";

export function TopNav() {
  return (
    <StyledTopNav>
      <FlowHorizontal>
        <Logo></Logo>
        <LinkButton to={{ pathname: "/" }}>팔로잉</LinkButton>
        <LinkButton to={{ pathname: "/category" }}>카테고리</LinkButton>
        <LinkButton to={{ pathname: "/channel" }}>채널</LinkButton>
      </FlowHorizontal>
      <FlowHorizontal>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <ActionButton>로그인</ActionButton>
        <ActionButton variant="primary">회원가입</ActionButton>
        <Dropdown label="KOR" />
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

const LinkButton = styled(NavLink)`
  font-size: 1.7rem;
  font-weight: 600;

  width: 13rem;

  border: none;
  background-color: transparent;
  outline: none;

  text-decoration: none;

  text-align: center;

  color: inherit;

  &:visited {
    color: inherit;
  }

  &.active {
    color: #772ce8;
  }
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

function Dropdown(props: { label: string }) {
  return (
    <StyledDropdown>
      <DropdownLabel>{props.label}</DropdownLabel>
      <DownArrowIcon />
    </StyledDropdown>
  );
}

const DropdownLabel = styled.div`
  font-size: 1.7rem;

  margin-right: 0.9rem;
`;

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;

  margin-left: 1.5rem;
`;
