import { DivFloatBtn,LinkFloatBtn } from "./floatBtnStyles";

function FloatBtns(){
    return(
        <DivFloatBtn>
            <LinkFloatBtn href="https://www.linkedin.com/in/guto-oliveira-227580294/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/40/000000/linkedin.png" alt="linkedin"/>
            </LinkFloatBtn>  
            <LinkFloatBtn href="https://github.com/Guts-01" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/?size=40&id=fqiiHnc6DMUi&format=png&color=000000" alt="github"/>
            </LinkFloatBtn>
            <LinkFloatBtn href="https://www.instagram.com/guts.okx/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluent/40/000000/instagram-new.png" alt="instagram"/>
            </LinkFloatBtn>
        </DivFloatBtn>
    )
}

export default FloatBtns;