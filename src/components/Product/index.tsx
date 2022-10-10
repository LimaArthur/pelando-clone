import { Container, 
  Galery, 
  Info, 
  SellerInfo,
  TimeAnnouncement, 
  ProductInfo,
  WatchLaterIcon, 
  Section,
  Selection, 
  SnowflakeIcon, 
  FireFlameCurvedIcon,
  OthersSelections,
  CommentIcon, 
  ShoppingCartIcon, 
} from './styles';

import fritadeiraImage from '../../assets/fritadeira.png'

export function Product() {
  return (
  <Container>
    <Galery>
      <img src={fritadeiraImage} alt="Fritadeira" />
    </Galery>
    <Info>
      <SellerInfo>
        <div>
          <p>vendido por</p>
          <a href="#">Shoptime</a>
        </div>
        <TimeAnnouncement>
          <WatchLaterIcon />
          <strong>37 min</strong>
        </TimeAnnouncement>
        </SellerInfo>
        <ProductInfo>
          <h3>Fritadeira Air Fry Philco Jumbo Gourmet PFR13P 8,1L</h3>
          <span>R$</span>
          <strong>320</strong>
        </ProductInfo>
        <Section>
          <Selection>
            <SnowflakeIcon />
            <strong>201°</strong>
            <FireFlameCurvedIcon />
          </Selection>
          <OthersSelections>
            <CommentIcon />
            <strong>6</strong>
            <ShoppingCartIcon />
            <span>ver na loja</span>
          </OthersSelections>
        </Section>
      </Info>
    </Container>
  );
}