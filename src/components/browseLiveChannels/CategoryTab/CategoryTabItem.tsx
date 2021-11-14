import { SyntheticEvent } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";

export interface CategoryTabItemProps {
  label: string;
  value: string;

  isSelected?: boolean;
  onChange?(e: SyntheticEvent, newValue: string): void;
}

export function CategoryTabItem(props: CategoryTabItemProps) {
  const { label, value, onChange, isSelected } = props;

  function handleClick(e: SyntheticEvent) {
    onChange?.call(e, e, value);
  }

  return (
    <StyledCategoryTabItem onClick={handleClick} isSelected={!!isSelected}>
      {label}
    </StyledCategoryTabItem>
  );
}

const StyledCategoryTabItem = styled.a<{ isSelected: boolean }>`
  display: flex;
  align-items: center;

  height: 2em;
  padding: 0 1em;

  outline: none;
  border-radius: 2em;
  cursor: pointer;

  ${(props) => getConditionalStyle(props.isSelected)};

  transition: background-color 0.2s, color 0.2s, border 0.2s;
`;

function getConditionalStyle(isSelected: boolean) {
  if (isSelected) {
    return css`
      background-color: ${colors.primary};
      color: white;
      border: 1px solid ${colors.primary};
    `;
  } else {
    return css`
      background-color: white;
      color: #515151;
      border: 1px solid #a9a9a9;
    `;
  }
}
