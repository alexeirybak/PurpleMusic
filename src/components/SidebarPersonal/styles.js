import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px;
`;

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: var(--main-text);
  margin-right: 16px;
`;

export const ButtonLogout = styled(NavLink)`
  background-color: var(--container);
  transition: background-color 0.5s ease;
  border: none;
`;
