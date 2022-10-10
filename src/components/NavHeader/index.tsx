import { Container, 
  NavIcons,
  Icons, 
  Calendar2HeartIcon,
  StarIcon, 
  WatchLaterIcon, 
  ThermometerHighIcon, 
  InsertCommentIcon, 
  ComputerIcon, 
  ControllerIcon,
  ChairIcon,
  ShirtIcon,
  LibraryIcon,
  LocalHospitalIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
} from './styles';

export function NavHeader() {
  return (
    <Container>
      <NavIcons>
        <Icons>
          <Calendar2HeartIcon />
          <span>Meus Alertas</span>
        </Icons>
        <Icons className="active">
          <StarIcon />
          <span>Destaques</span>
        </Icons>
        <Icons>
          <WatchLaterIcon />
          <span>Recentes</span>
        </Icons>
        <Icons>
          <ThermometerHighIcon />
          <span>Mais Quentes</span>
        </Icons>
        <Icons>
          <InsertCommentIcon />
          <span>Comentadas</span>
        </Icons>
        <Icons>
          <ComputerIcon />
          <span>Eletrônicos</span>
        </Icons>
        <Icons>
          <ControllerIcon />
          <span>Games e PC Gamer</span>
        </Icons>
        <Icons>
          <ChairIcon />
          <span>Casa e Cozinha</span>
        </Icons>
        <Icons>
          <ShirtIcon />
          <span>Moda</span>
        </Icons>
        <Icons>
          <LibraryIcon />
          <span>Livros, Filme e Música</span>
        </Icons>
        <Icons>
          <LocalHospitalIcon />
          <span>Saúde e Beleza</span>
        </Icons>
        <Icons>
          <ShoppingCartIcon />
          <span>Supermercado</span>
        </Icons>
        <Icons>
          <ChevronRightIcon />
        </Icons>
      </NavIcons>
    </Container>
  );
}