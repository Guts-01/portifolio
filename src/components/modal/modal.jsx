import { ConteinerEasterEgg, DivCloseModal, BtnCloseModal, DivrenderContent } from './modalStyles';
import PropTypes from 'prop-types';
import { ModalEasterEgg } from './modalStyles';
import { useEffect } from 'react';

export default function Modal ({ isOpen, setOpenModal, children}){
    // Fechar modal com ESC
    
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setOpenModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [setOpenModal]);

    // Impede o scroll da página quando o modal está aberto
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Fechar modal clicando fora dele
    
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', event => {
                if (event.target.tagName === 'ASIDE') {
                    setOpenModal();
                }
            }
        );
    }
}, [isOpen, setOpenModal])

if (!isOpen) return null
if(isOpen) {
return (

    <ModalEasterEgg>
        <ConteinerEasterEgg data-aos="zoom-in-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
            <DivCloseModal>
                <BtnCloseModal onClick={setOpenModal}>&#10007;</BtnCloseModal>
            </DivCloseModal>
            <hr className="dashed_modal" />
            <DivrenderContent>
                {children}
            </DivrenderContent>
        </ConteinerEasterEgg>
    </ModalEasterEgg>
);
};
}


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpenModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};


