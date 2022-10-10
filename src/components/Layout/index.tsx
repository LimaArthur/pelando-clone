import { Header } from '../Header';
import { NavHeader } from '../NavHeader';
import { SideBar } from '../SideBar';
import { Product } from '../Product';
import { Container, Wrapper } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
        <NavHeader />
      <Wrapper>
        <SideBar />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Wrapper>
    </Container>
  );
}