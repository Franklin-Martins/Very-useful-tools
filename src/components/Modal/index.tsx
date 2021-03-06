import React, { useEffect, useState } from 'react'

import "./styles.css"

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
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '70px',
                    left: '70px',
                    right: '70px',
                    bottom: '70px',
                    border: 'none',
                    background: 'transparent',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '0'
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