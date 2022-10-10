import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: auto;
  height: 100%;

  margin-top: 14px;
  padding: 16px;
  border-radius: 8px;

  background: var(--header);

`;

export const SideNav = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--font);

    padding-top: 6px;
    padding-bottom: 14px;

    a {
      color: var(--button);
    }
  }
`;

export const SideSearch = styled.div`
  width: 100%;
  height: 100%;

  h4 {
    font-size: 16px;
    font-weight: 700;

    color: var(--font)
  }

  div {
    display: flex;
    flex-wrap: wrap;

    padding-top: 6px;

    a {
      text-decoration: none;
      padding: 2px 2px;

      border-radius: 50px;

      span {
        display: flex;
        align-items: center;
        
        padding: 8px 8px 8px 8px;

        font: 16px;
        font-weight: 700;

        color: var(--font);
        border: 1px solid var(--background);

        border-radius: 4px;

        &:hover {
          color: var(--black);
          transition: .2s;
        }
      }
    }
  }
`;
