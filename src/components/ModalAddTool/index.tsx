import React, { useRef, useCallback, FormEventHandler } from 'react';

import { Form } from './styles'
import Modal from '../Modal';

interface ToolPlate {
    id: number;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

interface CreateToolData {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ToolPlate, 'id' >) => void;
}

const ModalAddFood: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const formRef = useRef<FormEventHandler>(null);

  const handleSubmit = useCallback(
    async (data: CreateToolData) => {
      handleAddTool(data);

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form >
        <h1>Add new Tool</h1>
        <label htmlFor="name"> <strong>Tool name</strong> </label>
        <input id="name" name="name" placeholder="Ex: json-server" />
        
        <label htmlFor="link"> <strong>Tool link</strong>  </label>
        <input id="link" name="link" placeholder="Paste link here" />

        <label htmlFor="description"> <strong>Tool description</strong>  </label>
        <input id="description" name="description" placeholder="Description" />

        <label htmlFor="tag"> <strong>Tag</strong>  </label>
        <input id="tag" name="tag" placeholder="tags:   #api #fake" />

        <button type="submit" >
        <p>Add tool</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood