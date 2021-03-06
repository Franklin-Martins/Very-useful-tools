import React, { useEffect, useState } from 'react'
import api from '../services/api'

import ModalAddTool from '../components/ModalAddTool'
import ModalDeleteTool from '../components/ModalDeleteTool'

import {
    Container,
    Content,
    Header,
    Navigation,
    Card,
} from './styles'
import { useNotification } from '../hooks/Notification'

interface Tool{
    id: number;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

const Dashboard:React.FC = () => {
    const [tools, setTools] = useState<Tool[]>([]);
    const [filterSearch, setFilterSearch] = useState(false);
    const [textToSearch, setTextToSearch] = useState('')
    const [tag, setTag] = useState('');
    const [nameOfTitle, setNameOfTitle] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [deletingTool, setDeletingTool] = useState<Pick<Tool, 'id' | 'title'>>({} as Tool);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const { addNotification } = useNotification()
    useEffect(()=> {
        async function loadTools() {
             const response = await api.get('/tools')

             setTools(response.data)
        }

        loadTools()
    }, []);

    useEffect(()=> {
        async function loadToolsFilteredByTag() {
            const response = await api.get('/tools',{
                params:{
                    tags_like: tag
                }
            })

            setTools(response.data)
        }
        loadToolsFilteredByTag()
    }, [tag, filterSearch]);

    useEffect(()=> {
        async function loadToolsFilteredByTitle() {
            const response = await api.get('/tools',{
                params:{
                    q: nameOfTitle
                }
            })
            
            setTools(response.data)
        }
        loadToolsFilteredByTitle()
    }, [nameOfTitle]);

    const handleAddFilter= (e: React.FormEvent<HTMLInputElement>) => {
        setTextToSearch(e.currentTarget.value)
        if(filterSearch) setTag(textToSearch) 
        if(!filterSearch) setNameOfTitle(textToSearch)
    }

    const handleChangeFilter = () =>{
        setFilterSearch(!filterSearch);
        if(filterSearch) {
            setTag(textToSearch);
            setNameOfTitle('')
        }
        if(!filterSearch) {
            setNameOfTitle(textToSearch)
            setTag('')
        }
    }

    async function openModal() {
        setModalOpen(!modalOpen)
    }

    async function openDeleteModalOpen() {
        setDeleteModalOpen(!deleteModalOpen)
    }

    async function handleAddTool(tool: Omit<Tool, 'id'>){
        setModalOpen(!modalOpen)
        try {
          const response = await api.post('/tools', tool)

          setTools([...tools, response.data])
          
          addNotification({
              type: 'success',
              title: 'Success!',
              description: "success when deleting tool."
          });
        } catch (err) {
          console.log(err);
          addNotification({
              type: 'error',
              title: 'Error!',
              description: 'error when deleting tool, try again!'
          })
        }
    }

    async function onDelete({ id, title }:Pick<Tool, 'id' | 'title'>) {
        setDeletingTool({ title,id })
        setDeleteModalOpen(!deleteModalOpen)
    }

    async function handleRemoveTool(){
        try {
            await api.delete(`/tools/${deletingTool.id}`)
            
            setTools(tools.filter(tool => tool.id !== deletingTool.id));

        } catch (err) {
          console.log(err);
        }
    }
    
    return(
        <>
        <Container>

        <ModalAddTool 
            isOpen={modalOpen}
            setIsOpen={openModal}
            handleAddTool={handleAddTool}
        />

        <ModalDeleteTool 
            isOpen={deleteModalOpen}
            setIsOpen={openDeleteModalOpen}
            deletingTool={deletingTool}
            handleRemoveTool={handleRemoveTool}
        />
            <Content>
            <Header>
                <h1>VUTTR</h1>
                <h3>Very useful tools to remember</h3>
            </Header>
            <Navigation>
                <div>
                    <input 
                        placeholder="search" 
                        type="text"
                        value={textToSearch}
                        onChange={handleAddFilter}
                    />
                    <label className="switch" htmlFor="filterByTag">
                        <input 
                            type="checkbox" 
                            id="filterByTag"
                            checked={filterSearch}
                            onChange={handleChangeFilter}
                        />
                        <span className="slider" />
                    </label>
                    <span >search in tags only</span>
                </div>
                <button onClick={openModal}> add</button>
            </Navigation>
            
            {tools && tools.map((tool)=>{
                return(
                    <Card key={tool.id}>
                    <header>
                        <a href={tool.link}><h1> {tool.title} </h1></a>
                        <button onClick={() => onDelete({ id: tool.id, title:tool.title })}>remove</button>
                    </header>
                    <div>
                        <p>
                            {tool.description}
                        </p>
                    </div>
                    <footer>
                        {tool.tags.map((tag)=>{
                            return(
                                <strong key={tag}> #{tag} </strong>
                            )
                        })}
                    </footer>
                </Card>)
            })}

            </Content>
        </Container>
        </>
    )
}

export default Dashboard