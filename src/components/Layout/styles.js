import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #383838;
  transition: background-color 0.5s ease;
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: var(--container);
  transition: background-color 0.5s ease;
  box-shadow: inset 0px 0px 7px 3px #b672ff;
    padding: 8px;
}
`;

export const NavTrackSidebar = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MainCenterBlock = styled.div`
  width: auto;
  padding: 20px 40px 20px 40px;
  transition: background-color 0.5s ease;
  @media screen and (max-width: 897px) {
    padding: 20px;
  }
  @media screen and (max-width: 360px) {
    padding: 5px;
  }
`;
