import styled, { css } from 'styled-components';

import { WatchLater, 
  Snowflake, 
  FireFlameCurved, 
  Comment, 
  ShoppingCart, 
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  margin-top: 14px;
  border-radius: 4px;

  max-width: 75%;
  background: var(--header);
`;

export const Galery = styled.div`

  img {
    width: 146px;
    height: 146px;

    margin: 6px;

    border: 1px solid var(--background);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const SellerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  padding: 4px 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 14px;
      font-weight: 400;
      color: var(--small);

      margin-right: 3px;
    }

    a {
      font-size: 14px;
      font-weight: 700;
      color: var(--font);
      
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: var(--black);
        transition: 0.2s;
      }
    }
  }
`;

export const TimeAnnouncement = styled.div`

  svg {
    width: 14px;
    height: 14px;
    color: var(--small);
    margin-right: 3px;
  }

  strong {
    font-size: 14px;
    font-weight: 400;
    color: var(--small);
  }
`;

export const ProductInfo = styled.div`
  padding: 8px 16px;

  h3 {
    font-size: 20px;
    color: var(--font);

    margin-bottom: 6px;

    &:hover {
      color: var(--black);
      transition: 0.2s;
    }
  }

  span {
    font-size: 20px;
    font-weight: 400;
    color: var(--button);
  }

  strong {
    font-size: 28px;
    font-weight: 500;
    color: var(--button);
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 8px 8px 16px;

  border-top: 1px solid var(--background);
`;

export const Selection = styled.div`
  display: flex;
  align-content: center;

  border: 1px solid var(--background);

  border-radius: 15px;
  padding: 4px;

  svg, strong {
    margin: 2px;
  }

  svg:first-child {
    &:hover {
      color: var(--ice);
      transition: 0.2s;
    }
  }

  svg:last-child {
    &:hover {
      color: var(--button);
      transition: 0.2s;
    }
  }

  strong {
    color: var(--button);
    padding: 0 2px;
  }
`;

export const OthersSelections = styled.div`
  /* display: flex; */
  /* align-items: center; */
  padding: 4px;

  svg {
    color: var(--small);
  }

  strong {
    font-size: 16px;
    color: var(--font);
    margin: 0 24px 0px 4px;

    &:hover {
      color: var(--black);
      transition: 0.2s;
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--font);
    margin: 0 0 0 4px;

    &:hover {
      color: var(--black);
      transition: 0.2s;
    }
  }
`;

const iconCSS = css`
  width: 18px;
  height: 18px;
`;

export const WatchLaterIcon = styled(WatchLater)`${iconCSS}`;

export const SnowflakeIcon = styled(Snowflake)`${iconCSS}`;

export const FireFlameCurvedIcon = styled(FireFlameCurved)`${iconCSS}`;

export const CommentIcon = styled(Comment)`${iconCSS}`;

export const ShoppingCartIcon = styled(ShoppingCart)`${iconCSS}`;