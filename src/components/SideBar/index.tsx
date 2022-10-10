import comprasImg from '../../assets/compras.png';
import { Container, SideNav, SideSearch } from './styles';

export function SideBar() {
  return (
    <Container>
      <div>
        <img src={comprasImg} alt="Compras" />
      </div>

      <SideNav>
        <div>
          <h3>O que é o Pelando?</h3>
          <p>Uma plataforma para encontrar e tirar dúvidas. <a href="#">Faça parte!</a></p>
        </div>
        <SideSearch>
          <h4>Compre no site de suas lojas favoritas:</h4>
          <div>
            <a href="#"> <span>C&A</span></a>
            <a href="#"> <span>Magazine Luiza</span></a>
            <a href="#"> <span>Amazon</span></a>
            <a href="#"> <span>Americanas</span></a>
            <a href="#"> <span>AliExpress</span></a>
            <a href="#"> <span>Casas Bahia</span></a>
            <a href="#"> <span>Shoptime</span></a>
            <a href="#"> <span>Submarino</span></a>
            <a href="#"> <span>iFood</span></a>
            <a href="#"> <span>Terabyte Shop</span></a>
            <a href="#"> <span>Shopee</span></a>
            <a href="#"> <span>Extra</span></a>
            <a href="#"> <span>Ponto Frio</span></a>
          </div>
        </SideSearch>
      </SideNav>
    </Container>
  );
}