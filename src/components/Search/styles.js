import styled from 'styled-components';

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--center-block-search);
  padding-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const Glass = styled.div`
  position: relative;
`;

export const Handle = styled.div`
  position: absolute;
  top: 4px;
  left: 9px;
`;

export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: 1px var(--main-text) solid;
  border-radius: 10px;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: var(--main-text);
  &::placeholder {
    background-color: transparent;
    color: var(--main-text);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 5px 5px;
  }
`;
