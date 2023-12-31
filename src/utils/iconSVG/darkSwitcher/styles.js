import styled from 'styled-components';

export const DarkSwitcherImg = styled.svg`
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(180deg);
  }
`;
