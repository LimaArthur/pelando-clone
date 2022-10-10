import styled, { css } from 'styled-components';
import { 
  Calendar2Heart, 
  Star, 
  WatchLater, 
  ThermometerHigh, 
  InsertComment, 
  Computer, 
  Controller, 
  Chair, 
  Shirt, 
  Library, 
  LocalHospital, 
  ShoppingCart,
  ChevronRight, 
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 62px;
  padding: 0 32px 0 32px;
  background: var(--header);

`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;

  width: 1360px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
  }

  &:first-child {
    margin: 0 8px 4px 0;
    border-right: 1px solid var(--background);
  }

  &.active {
    border-bottom: 4px solid var(--button);

    span, svg {
      color: var(--button);
      fill: var(--button);
    }
  }
`;

const iconCSS = css`
  width: 22px;
  height: 22px;
`;

export const Calendar2HeartIcon = styled(Calendar2Heart)`${iconCSS}`;

export const StarIcon = styled(Star)`${iconCSS}`;

export const WatchLaterIcon = styled(WatchLater)`${iconCSS}`;
export const ThermometerHighIcon = styled(ThermometerHigh)`${iconCSS}`;
export const InsertCommentIcon = styled(InsertComment)`${iconCSS}`;
export const ComputerIcon = styled(Computer)`${iconCSS}`;
export const ControllerIcon = styled(Controller)`${iconCSS}`;
export const ChairIcon = styled(Chair)`${iconCSS}`;

export const ShirtIcon = styled(Shirt)`${iconCSS}`;

export const LibraryIcon = styled(Library)`${iconCSS}`;

export const LocalHospitalIcon = styled(LocalHospital)`${iconCSS}`;

export const ShoppingCartIcon = styled(ShoppingCart)`${iconCSS}`;

export const ChevronRightIcon = styled(ChevronRight)`${iconCSS}`;


