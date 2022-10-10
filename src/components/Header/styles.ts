import styled from 'styled-components';
import { Menu, Search } from '../../styles/Icons';

export const Container = styled.header`
  width: 100%;
  background: var(--header);
  padding: 0 32px 0 32px;
  `;

export const Content = styled.div`
  max-width: 1360px;
  height: 56px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;

  img:last-child {
    padding-left: 14px;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 24px;
  height: 24px;
`;

export const SearchIcon = styled(Search)`
  width: 22px;
  height: 22px;
  margin-left: -30px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;

  > input {
    width: 910px;
    height: 34px;

    font-size: 14px;
    font-weight: 200;
    color: var(--font);

    padding: 0px 40px 0 15px;

    background: var(--background);

    border-radius: 18px;

    &::placeholder {
      font-size: 14px;
      font-weight: 200;

      color: var(--font);
    }
  }
`;

export const RegisterButton  = styled.div`
  display: flex;
  align-items: center;

  > button {
    width: 104px;
    height: 36px;
    background: var(--button);

    font-size: 16px;
    font-weight: 700;

    color: var(--header);

    border-radius: 18px;
    cursor: pointer;

    &:hover {
      background: var(--button-hover);
      transition: .2s;
    }
  }
`;

