import styled from 'styled-components';

export const MainSidebar = styled.div`
  padding: 20px 28px 20px 28px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 378px;
  background-color: var(--container);
  transition: background-color 0.5s ease;
  @media screen and (max-width: 897px) {
    height: auto;
  }
  @media screen and (max-width: 360px) {
    padding: 0 0 20px 0;
  }
`;
