import React from 'react';

import Modal from '../Modal'

import {Container} from './styles'

interface ModalProps{
    isOpen:boolean;
    setIsOpen: () => void;
    handleDeleteTool: (id:number) => void;
}

const ModalDeleteTool: React.FC<ModalProps> = ({ isOpen, setIsOpen, handleDeleteTool }) =>{
    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Container>
                <h1>do you want to delete the following tool?</h1>
                <p></p>
                <div>
                    <button >Cancel</button>
                    <button>Delete</button>
                </div>
            </Container>
        </Modal>
    )
}

export default ModalDeleteTool;