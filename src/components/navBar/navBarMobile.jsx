import {NavBarMobile} from "./navBarMobileStyles";

import { HtmlTag_p,  } from '../htmlTags/Tags_html';
import {   SectionsLinksMobile, SectionsLinks_imgMobile,  StyledLinkMobile,ButtonUpMobile} from "./navBarMobileStyles";
import casa from '../../assets/images/home/navBar/casa.png';
import avatar from '../../assets/images/home/navBar/avatar.png';
import trabalho from '../../assets/images/home/navBar/trabalhador.png';
import projeto from '../../assets/images/home/navBar/plano-de-projeto.png';


function NavMobile() {
    return(
        <NavBarMobile>
            <ButtonUpMobile href='#'>&uArr;</ButtonUpMobile>


            <StyledLinkMobile to={"/"}>
                <SectionsLinksMobile>
                    <HtmlTag_p>Home</HtmlTag_p>
                    <SectionsLinks_imgMobile src={casa}></SectionsLinks_imgMobile>
                </SectionsLinksMobile>
            </StyledLinkMobile>

            <StyledLinkMobile to={"/about"}>
                <SectionsLinksMobile>
                    <HtmlTag_p >Sobre</HtmlTag_p>
                    <SectionsLinks_imgMobile src={avatar}></SectionsLinks_imgMobile>
                </SectionsLinksMobile>
            </StyledLinkMobile>

            <StyledLinkMobile to={"/projects"}>
                <SectionsLinksMobile>
                    <HtmlTag_p>Projetos</HtmlTag_p>
                    <SectionsLinks_imgMobile src={projeto}></SectionsLinks_imgMobile>
                </SectionsLinksMobile>
            </StyledLinkMobile>

            <StyledLinkMobile to={"/services"}>
                <SectionsLinksMobile>
                    <HtmlTag_p >Meus serviços</HtmlTag_p>
                    <SectionsLinks_imgMobile src={trabalho}></SectionsLinks_imgMobile>
                </SectionsLinksMobile>
            </StyledLinkMobile>

        </NavBarMobile>
    )
}

export default NavMobile;