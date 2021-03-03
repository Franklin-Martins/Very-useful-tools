import React, { useEffect, useState } from 'react'
import api from '../services/api'

import {
    Container,
    Content,
    Header,
    Navigation,
    Card,
} from './styles'

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

    return(
        <Container>
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
                <button> + add</button>
            </Navigation>
            
            {tools && tools.map((tool)=>{
                return(
                    <Card key={tool.id}>
                    <header>
                        <a href={tool.link}><h1> {tool.title} </h1></a>
                        <button>remove</button>
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
    )
}

export default Dashboard