import logoImg from '../../assets/logo.svg';
import { 
  Container, 
  Content,
  ContentIcons,
  SearchInput,
  RegisterButton,
  MenuIcon,
  SearchIcon,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <ContentIcons>
          <MenuIcon />
          <img src={logoImg} alt="Pelando" />
        </ContentIcons>
        <SearchInput>
          <input type="text" placeholder="Procure por promoções ou lojas" />
          <SearchIcon />
        </SearchInput>
          <RegisterButton>
            <button type="button">Cadastrar</button>
          </RegisterButton>
      </Content>
    </Container>
  );
}