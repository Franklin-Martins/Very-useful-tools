import React from 'react';
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit } = useForm<CreateToolData>();

  const onSubmit = handleSubmit((data)=>{
    const auxList = data.tags ? data.tags.toString() : ""
    
    data.tags = auxList.split(' ')
    handleAddTool(data)
  })

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form  onSubmit={onSubmit}>
        <h1>Add new Tool</h1>
        <label htmlFor="title"> <strong>Tool name</strong> </label>
        <input ref={register({ required: true })} id="title" name="title" placeholder="Ex: json-server" />
        
        <label htmlFor="link"> <strong>Tool link</strong>  </label>
        <input ref={register} id="link" name="link" placeholder="Paste link here" />

        <label htmlFor="description"> <strong>Tool description</strong>  </label>
        <input ref={register} id="description" name="description" placeholder="Description" />

        <label htmlFor="tag"> <strong>Tag</strong>  </label>
        <input ref={register} id="tags" name="tags" placeholder="tags:   #api #fake" />

        <button type="submit" >
        <p>Add tool</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood