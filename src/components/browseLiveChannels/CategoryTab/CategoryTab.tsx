import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";
import { CategoryTabItemProps } from "./CategoryTabItem";

interface CategoryTabProps {
  children: ReactElement<CategoryTabItemProps>[];

  value: string;
  onChange(e: SyntheticEvent, newValue: string): void;
}

export function CategoryTab(props: CategoryTabProps) {
  const { children, value, onChange } = props;

  const newChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      isSelected: value === child.props.value,
    });
  });

  return <StyledCategoryTab>{newChildren}</StyledCategoryTab>;
}

const StyledCategoryTab = styled.div`
  display: flex;

  font-size: 2em;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`;
