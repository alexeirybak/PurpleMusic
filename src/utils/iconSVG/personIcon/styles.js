import styled from 'styled-components';

export const SidebarIcon = styled.svg`
  width: 43px;
  height: 43px;
  background-color: var(--sidebar-icon-bg);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s ease;
  path {
    stroke: var(--main-text);
  }
`;
