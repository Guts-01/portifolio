import { NavBarStyled, SectionsFooter, SectionsLinks, SectionsLinks_img, FooterNavBar, StyledLink,ButtonUp} from "./navBarStyles";
// Importando tags de estilo
import { HtmlTag_p, HtmlTag_hr, HtmlTag_a, HtmlTag_h1 } from '../htmlTags/Tags_html';
// Importando imagens do NavBar
import casa from '../../assets/images/home/navBar/casa.png';
import avatar from '../../assets/images/home/navBar/avatar.png';
import engrenagem from '../../assets/images/home/navBar/rotacao-da-engrenagem.png';
import trabalho from '../../assets/images/home/navBar/trabalhador.png';
import projeto from '../../assets/images/home/navBar/plano-de-projeto.png';
// Importando a estilização e animação feita com css
import '../css/animations.css';
import FloatBtns from "../floatBtnLinks/floatBtn";
function NavBar() {
    return (
        <NavBarStyled>
            <FloatBtns></FloatBtns>
            <ButtonUp href='#'>&uArr;</ButtonUp>
            <HtmlTag_h1 className="animation-logo">
                <div className="card">
                    <div className="loader">
                        <div className="words">
                            <span className="word">Dev front-end</span>
                            <span className="word">QA automation</span>
                            <span className="word">Dev back-end</span>
                            <span className="word">Hacking student</span>
                            <span className="word">Dev front-end</span>
                        </div>
                    </div>
                </div>
            </HtmlTag_h1>

            <HtmlTag_hr></HtmlTag_hr>  {/* Tag hr para criar linha */}

            <StyledLink to={"/"}>
                <SectionsLinks>
                    <HtmlTag_p>Home</HtmlTag_p>
                    <SectionsLinks_img src={casa}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <StyledLink to={"/about"}>
                <SectionsLinks>
                    <HtmlTag_p >Sobre</HtmlTag_p>
                    <SectionsLinks_img src={avatar}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <StyledLink to={"/projects"}>
                <SectionsLinks>
                    <HtmlTag_p>Projetos</HtmlTag_p>
                    <SectionsLinks_img src={projeto}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <StyledLink to={"/services"}>
                <SectionsLinks>
                    <HtmlTag_p >Meus serviços</HtmlTag_p>
                    <SectionsLinks_img src={trabalho}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <StyledLink>
                <SectionsLinks>
                    <HtmlTag_p>Em breve...</HtmlTag_p>
                    <SectionsLinks_img src={engrenagem}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <StyledLink>
                <SectionsLinks>
                    <HtmlTag_p>Em breve...</HtmlTag_p>
                    <SectionsLinks_img src={engrenagem}></SectionsLinks_img>
                </SectionsLinks>
            </StyledLink>

            <FooterNavBar>
                <SectionsFooter>
                    <p>	&#169; Copyrigth 2025</p>
                </SectionsFooter>
                <SectionsFooter>
                    <HtmlTag_a> Desenvolvido por mim</HtmlTag_a>
                </SectionsFooter>
            </FooterNavBar>
        </NavBarStyled>
    );
}

export default NavBar;