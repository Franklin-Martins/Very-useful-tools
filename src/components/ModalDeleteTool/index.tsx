import React from 'react';

import { Container, Header } from './styles';
import Modal from '../Modal';

interface Tool {
  id: number;
  title: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveTool: (data: Tool) => void
  deletingTool: Tool;
}

const ModalDeleteTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  deletingTool,
  handleRemoveTool,
}) => {
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Container>
            <Header>
            <h2> <strong>Remove Tool</strong> </h2>
            <button onClick={ ()=> setIsOpen()}> x </button>
            </Header>
            <span>Are you sure you want to remove <strong> {deletingTool.title} </strong> </span>
            <div>
                <button onClick={ ()=> setIsOpen()}>Cancel</button>
                <button onClick={ ()=> handleRemoveTool(deletingTool)} >Delete</button>
            </div>
        </Container>
    </Modal>
  );
};

export default ModalDeleteTool;