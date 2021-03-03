import React, { useEffect, useState } from 'react'

import ReactModal from 'react-modal';

interface ModalProps{
    children: any;
    isOpen: boolean;
    setIsOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen })=>{
    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        setModalStatus(isOpen);
    }, [isOpen])

    return(
        <ReactModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={setIsOpen}
            isOpen={modalStatus}
            ariaHideApp={false}
            style={{
                content:{
                    top: '50%',
                    left: '680px',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#FFFFFF 0% 0% no-repeat padding-box;',
                    color: '#000000',
                    borderRadius: '8px',
                    width: '570px',
                    maxHeight: '616px',
                    border: 'none'
                },
                overlay:{
                    background: '#121214e6'
                }
            }}
        >   
            {children}
        </ReactModal>
    )
}

export default Modal;